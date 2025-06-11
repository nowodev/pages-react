import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

function WebsiteCalculator() {
  const [type, setType] = useState("");
  const [features, setFeatures] = useState("");
  const [content, setContent] = useState("");
  const [urgency, setUrgency] = useState("");
  const [support, setSupport] = useState("");
  const [total, setTotal] = useState("0");

  useEffect(() => {
    const numbers = [type, features, content, urgency].filter(
      (n) => !Number.isNaN(parseInt(n))
    );

    const totalPrice = numbers.reduce((acc, cur) => acc + parseInt(cur), 0);
    setTotal(totalPrice ? totalPrice.toString() : "0");
  }, [type, features, content, urgency]);

  return (
    <div className="flex flex-col min-h-screen h-screen justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm space-y-4 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Website Calculator
        </h1>
        <div className="*:not-first:mt-2">
          <Label htmlFor="project-type">Project Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="project-type">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">Informational (1-5 pages)</SelectItem>
              <SelectItem value="3000">
                Standard Business Site (5-10 pages)
              </SelectItem>
              <SelectItem value="5000">
                E-commerce/Advanced Site (10+ pages)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="features-integrations">
            Number of Features/Integrations
          </Label>
          <Select value={features} onValueChange={setFeatures}>
            <SelectTrigger id="features-integrations">
              <SelectValue placeholder="Select number of features/integrations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="500">1-2</SelectItem>
              <SelectItem value="1000">3-4</SelectItem>
              <SelectItem value="1500">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="content-creation">Content Creation Help</Label>
          <Select value={content} onValueChange={setContent}>
            <SelectTrigger id="content-creation">
              <SelectValue placeholder="Select content creation help" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="500">Partial</SelectItem>
              <SelectItem value="1000">Full</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="urgency">Urgency (Timeline)</Label>
          <Select value={urgency} onValueChange={setUrgency}>
            <SelectTrigger id="urgency">
              <SelectValue placeholder="Select urgency (timeline)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Standard</SelectItem>
              <SelectItem value="1000">Rush/Expedited</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="support">Post-Launch Support</Label>
          <Select value={support} onValueChange={setSupport}>
            <SelectTrigger id="support">
              <SelectValue placeholder="Select post-launch support" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None</SelectItem>
              <SelectItem value="100">Monthly ($100)</SelectItem>
              <SelectItem value="300">Quarterly ($300)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {total !== null && (
          <div className="mt-4 text-green-700 font-bold text-lg">
            Estimated Price: ${total} + Support (
            {support === "" ? "None" : `$${support}/month`})
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default WebsiteCalculator;
