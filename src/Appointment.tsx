import { useEffect, useState } from "react";
import { Calendar } from "./components/ui/calendar";
import { ScrollArea } from "./components/ui/scroll-area";
import { Button } from "./components/ui/button";
import { format } from "date-fns";
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toastManager } from "./components/ui/toast";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;

const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];

function Appointment() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);
    const [user, setUser] = useState<string | null>(null);
    const today = new Date()
    const [availableDays, setAvailableDays] = useState([]);
    const [date, setDate] = useState<Date | undefined>()
    const [time, setTime] = useState<string | null>(null)
    const [duration, setDuration] = useState<number | null>(null)
    const [timezone, setTimezone] = useState<string | null>(null)

    async function getUsers() {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (res.ok) {
                setUsers(data.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function getAvailableDays(userId: string) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/availabilities/${userId}/days`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (res.ok) {
                let availableDays = data.data;
                let days = availableDays.map((day: any) => day?.day_of_week);
                setAvailableDays(days);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSelectDate(newDate: Date) {
        const formattedDate = format(newDate, "yyyy-MM-dd");
        // formatUTCToTimezone(formattedDate, timezone)
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/availabilities/${user}/slots?date=${formattedDate}&request_timezone=${timezone}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            if (!res.ok) {
                toastManager.add({
                    description: data.message,
                    title: "Uh oh! Something went wrong.",
                    type: "error",
                });
                handleResetTime();
                return;
            }
            setTimeSlots(data.data)
        } catch (error) {
            console.error(error);
        } finally {
            setDate(newDate)
            setTime(null)
            setIsLoading(false);
        }
    }

    async function bookAppointment() {
        if (!time || !date || !duration) {
            toastManager.add({
                description: "Please select a date and time for your appointment.",
                title: "Missing required fields.",
                type: "error",
            });
            return;
        }

        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/appointments/schedule`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: user,
                    patient_id: "123",
                    patient_email: "testemail@gmail.com",
                    patient_name: "Test Name",
                    patient_phone: "+1234567890",
                    start_time: time,
                    duration: Number(duration),
                    type: "phone",
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                toastManager.add({
                    description: data.message,
                    title: "Uh oh! Something went wrong.",
                    type: "error",
                });
                return;
            }
            toastManager.add({
                description: data.message,
                title: "Appointment scheduled successfully.",
                type: "success",
            });
            handleResetAll();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleSetUser(user: string) {
        setUser(user);
        getAvailableDays(user);
        handleResetTime();
    }

    function handleResetTime() {
        setDate(undefined);
        setTime(null);
        setTimeSlots([]);
    }

    function handleResetAll() {
        setUser(null);
        setTimezone(null);
        handleResetTime();
    }

    useEffect(() => {
        getUsers();
    }, []);

    function formatUTCToTimezone(timestamp, timezone = 'UTC') {
        // Handle both Unix epoch (milliseconds or seconds) and ISO 8601 formats
        let date;

        if (typeof timestamp === 'string') {
            // ISO 8601 format or other string
            date = new Date(timestamp);
        } else if (typeof timestamp === 'number') {
            // Assume milliseconds if > 10 billion, otherwise seconds
            date = new Date(timestamp > 10000000000 ? timestamp : timestamp * 1000);
        } else {
            console.error('Invalid timestamp format');
            return;
        }

        // Check if date is valid
        if (isNaN(date.getTime())) {
            console.error('Invalid date');
            return;
        }

        // Format options for readable output
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
            timeZone: timezone
        };

        try {
            const formattedTime = date.toLocaleString('en-US', options);

            return {
                timezone: timezone,
                formatted: formattedTime,
                formattedDate: date.toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                formattedTime: date.toLocaleString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short',
                    timeZone: timezone
                }),
                iso: date.toISOString(),
                timestamp: date.getTime()
            };
        } catch (error) {
            console.error(`Invalid timezone: ${timezone}`);
            return null;
        }
    }

    return (
        <main className="px-4 py-12 sm:px-6 lg:px-8 w-full min-h-screen space-y-3">
            <section>
                <h1 className="text-2xl font-bold">Book an Appointment</h1>
            </section>

            <section className="space-y-5">
                <div className="*:not-first:mt-2 w-fit">
                    <Label htmlFor="">Select User</Label>
                    <Select onValueChange={(value) => handleSetUser(value)}>
                        <SelectTrigger id="">
                            <SelectValue placeholder="Select User" />
                        </SelectTrigger>
                        <SelectContent>
                            {users.map((user) => (
                                <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {user && (
                    <div className="*:not-first:mt-2 w-fit">
                        <Label htmlFor="">Select Timezone <span className="text-xs underline decoration-wavy decoration-cyan-300">(currently {Intl.DateTimeFormat().resolvedOptions().timeZone})</span></Label>
                        <Select onValueChange={(value) => setTimezone(value)}>
                            <SelectTrigger id="">
                                <SelectValue placeholder="Select Timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="UTC">UTC (UTC)</SelectItem>
                                <SelectItem value="America/Los_Angeles">PST (America/Los_Angeles - Pacific Standard Time) (UTC-08:00)</SelectItem>
                                <SelectItem value="America/Chicago">CST (America/Chicago - Central Standard Time) (UTC-06:00)</SelectItem>
                                <SelectItem value="America/New_York">EST (America/New_York - Eastern Standard Time) (UTC-05:00)</SelectItem>
                                <SelectItem value="America/Denver">MST (America/Denver - Mountain Standard Time) (UTC-07:00)</SelectItem>
                                <SelectItem value="Pacific/Honolulu">HST (Pacific/Honolulu - Hawaiian Standard Time) (UTC-10:00)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                {user && timezone && (
                    <div className="*:not-first:mt-2 w-fit">
                        <Label htmlFor="">Select Date</Label>
                        <div className="rounded-md border">
                            <div className="flex max-sm:flex-col">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(newDate) => { handleSelectDate(newDate) }}
                                    className="p-2 sm:pe-5"
                                    disabled={[
                                        { before: today }, // dates before today
                                        { dayOfWeek: daysOfWeek.filter((day) => !availableDays.includes(day)) } // days not available
                                    ]}
                                />

                                {timeSlots?.length > 0 && (
                                    <div className="relative w-full max-sm:h-48 sm:w-40">
                                        <div className="absolute inset-0 py-4 max-sm:border-t">
                                            <ScrollArea className="h-full sm:border-s">
                                                <div className="space-y-3">
                                                    <div className="flex h-5 shrink-0 items-center px-5">
                                                        <p className="text-sm font-medium">
                                                            {format(date, "EEEE, d")}
                                                        </p>
                                                    </div>
                                                    <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                                                        {timeSlots.map((timeSlot, index) => (
                                                            <>
                                                                <Button
                                                                    key={index}
                                                                    variant={time === timeSlot.start ? "default" : "outline"}
                                                                    size="sm"
                                                                    className="w-full"
                                                                    onClick={() => setTime(timeSlot.start)}
                                                                >
                                                                    {formatUTCToTimezone(timeSlot.start, timezone)?.formattedTime}
                                                                    {/* {format(timeSlot.start, "h:mm a")} */}
                                                                </Button>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </ScrollArea>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {time && (
                    <div className="*:not-first:mt-2">
                        <Label htmlFor="">Duration</Label>
                        <Select onValueChange={(value) => setDuration(Number(value))}>
                            <SelectTrigger id="">
                                <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="15">15 minutes</SelectItem>
                                <SelectItem value="30">30 minutes</SelectItem>
                                <SelectItem value="45">45 minutes</SelectItem>
                                <SelectItem value="60">60 minutes</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                {time && duration && (
                    <div className="*:not-first:mt-2">
                        <Button onClick={bookAppointment} disabled={isLoading}>
                            {isLoading ? "Booking..." : "Book Appointment"}
                        </Button>
                    </div>
                )}
            </section>

            {/* <button onClick={getAvailableSlots}>Get Available Slots</button> */}
        </main >
    )
}

export default Appointment
