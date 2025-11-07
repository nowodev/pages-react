import React, { useState, useRef, useEffect, DragEvent, ChangeEvent, KeyboardEvent } from 'react';
// ADDED: Disc icon for the shape selector
import { Users, Plus, X, Upload, Download, Search, Save, FileUp, Hash, Disc, Square, Maximize2 } from 'lucide-react';

// ===============================================
// TYPE DEFINITIONS
// ===============================================

type Guest = string;
type Seat = Guest | null;
type TableShape = 'circle' | 'square' | 'rectangle';

// ADDED: The list of available shapes
const TABLE_SHAPES: TableShape[] = ['circle', 'square', 'rectangle'];

interface Table {
  id: number;
  name: string;
  capacity: number;
  shape: TableShape;
  seats: Seat[];
}

// --- Component Prop Types ---

interface SeatProps {
  guest: Seat;
  tableId: number;
  seatIndex: number;
  onDragStart: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>, tableId: number, seatIndex: number) => void;
  onRemove: (tableId: number, seatIndex: number, guest: Guest) => void;
}

interface TableLayoutProps {
  table: Table;
  onDragStart: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDrop: (e: DragEvent<HTMLDivElement>, tableId: number, seatIndex: number) => void;
  onRemove: (tableId: number, seatIndex: number, guest: Guest) => void;
}

// ===============================================
// CONSTANTS & HELPERS
// ===============================================

const CAPACITY_OPTIONS = [4, 6, 8, 10, 12];
const DEFAULT_CAPACITY = 8;
const DEFAULT_SHAPE: TableShape = 'circle';

/** Helper to create an array of seats */
const createSeats = (capacity: number, currentSeats: Seat[] = []): Seat[] => {
    const seats: Seat[] = Array(capacity).fill(null);
    currentSeats.slice(0, capacity).forEach((guest, index) => {
        if (guest) seats[index] = guest;
    });
    return seats;
}

/** Helper to get the first available empty seat index */
const getEmptySeatIndex = (seats: Seat[]): number => seats.findIndex(seat => seat === null);

/** Helper to get the number of seated guests */
const getSeatedCount = (seats: Seat[]): number => seats.filter(guest => guest !== null).length;


// ===============================================
// Seat Component
// ===============================================

function Seat({ guest, tableId, seatIndex, onDragStart, onDragOver, onDrop, onRemove }: SeatProps): JSX.Element {
  const isOccupied = guest !== null;

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    if (isOccupied) {
      e.dataTransfer.setData('guestName', guest as string);
      e.dataTransfer.setData('sourceType', 'seat');
      e.dataTransfer.setData('sourceTableId', tableId.toString());
      e.dataTransfer.setData('sourceSeatIndex', seatIndex.toString());
      onDragStart(e);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragOver(e);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onDrop(e, tableId, seatIndex);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px',
      }}
    >
      <div
        // CHANGED: Added gap-1 for spacing between name and button
        className={`w-full h-full p-2 rounded-lg flex items-center justify-between gap-1 text-sm transition-all
          ${isOccupied 
            ? 'bg-pink-100 border-pink-400 border shadow-md cursor-move' 
            : 'bg-gray-100 border-dashed border-gray-400 border-2 text-gray-400'
          }`}
        draggable={isOccupied}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* CHANGED: Removed truncate, added flex-1, break-words, and title for hover */}
        <span 
          className="flex-1 text-xs font-medium text-left break-words"
          title={guest || undefined}
        >
          {guest || 'Empty'}
        </span>
        {isOccupied && (
          <button
            onClick={() => onRemove(tableId, seatIndex, guest as string)}
            className="text-red-500 hover:text-red-700 transition ml-1 shrink-0"
            title="Remove guest"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// ===============================================
// TableLayout Component
// ===============================================

function TableLayout({ table, onDragStart, onDragOver, onDrop, onRemove }: TableLayoutProps): JSX.Element {
  const { id, shape, seats } = table;
  const seatElements: JSX.Element[] = [];

  const handleTableDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const emptySeatIndex = getEmptySeatIndex(seats);
      if (emptySeatIndex !== -1) {
          onDrop(e, id, emptySeatIndex);
      }
  };

  // --- Seat Position Calculation ---
  if (shape === 'circle') {
    const radius = 120; // Radius of the circle in pixels
    const tableSize = 280; // Size of the container
    const seatSize = 70; // Approx size of a seat for offset
    
    seats.forEach((guest, index) => {
      const angle = (index / seats.length) * 2 * Math.PI - Math.PI / 2;
      const x = radius * Math.cos(angle) + (tableSize / 2) - (seatSize / 2);
      const y = radius * Math.sin(angle) + (tableSize / 2) - (seatSize / 2);

      seatElements.push(
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`,
            width: `${seatSize}px`,
          }}
        >
          <Seat
            guest={guest}
            tableId={id}
            seatIndex={index}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onRemove={onRemove}
          />
        </div>
      );
    });
    
    return (
      <div
        className="relative bg-gray-100 border-4 border-gray-300 rounded-full"
        style={{ width: `${tableSize}px`, height: `${tableSize}px`, margin: '20px auto' }}
        onDragOver={handleTableDrop}
        onDrop={handleTableDrop}
      >
        {seatElements}
      </div>
    );

  } else if (shape === 'rectangle') {
    const seatsPerRow = Math.ceil(seats.length / 2);
    seats.forEach((guest, index) => {
      seatElements.push(
        <Seat
          key={index}
          guest={guest}
          tableId={id}
          seatIndex={index}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onRemove={onRemove}
        />
      );
    });

    return (
      <div
        className="p-4 bg-gray-100 rounded-lg border-4 border-gray-300 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)` }}
        onDragOver={handleTableDrop}
        onDrop={handleTableDrop}
      >
        {seatElements}
      </div>
    );

  } else { // 'square'
    const sideLength = Math.ceil(Math.sqrt(seats.length));
    seats.forEach((guest, index) => {
      seatElements.push(
        <Seat
          key={index}
          guest={guest}
          tableId={id}
          seatIndex={index}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onRemove={onRemove}
        />
      );
    });

    return (
      <div
        className="p-4 bg-gray-100 rounded-lg border-4 border-gray-300 grid gap-2"
        style={{ 
            gridTemplateColumns: `repeat(${sideLength}, 1fr)`,
            aspectRatio: '1 / 1',
            maxWidth: '400px',
            margin: 'auto'
        }}
        onDragOver={handleTableDrop}
        onDrop={handleTableDrop}
      >
        {seatElements}
      </div>
    );
  }
}


// ===============================================
// Main App Component
// ===============================================
export default function WeddingSeating(): JSX.Element {
  const [unassignedGuests, setUnassignedGuests] = useState<Guest[]>([]);
  const [tables, setTables] = useState<Table[]>([]); 
  const [uploadText, setUploadText] = useState<string>('');
  const [showUploadModal, setShowUploadModal] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newGuestName, setNewGuestName] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const newGuestInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    const names = uploadText
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0);
    setUnassignedGuests(names);
    setShowUploadModal(false);
  };

  const addTable = () => {
    const newTable: Table = {
      id: Date.now(),
      name: `Table ${tables.length + 1}`,
      capacity: DEFAULT_CAPACITY,
      shape: DEFAULT_SHAPE,
      seats: createSeats(DEFAULT_CAPACITY)
    };
    setTables([...tables, newTable]);
  };

  // --- Core Seating Logic Functions ---

  const addGuestToSeat = (tableId: number, guestName: Guest, seatIndex: number) => {
    setTables(tables.map(table => {
        if (table.id === tableId) {
            const existingGuest = table.seats[seatIndex];
            if (existingGuest) {
                setUnassignedGuests(prev => [...prev.filter(g => g !== guestName), existingGuest]);
            } else {
                setUnassignedGuests(prev => prev.filter(g => g !== guestName));
            }
            
            const newSeats = [...table.seats];
            newSeats[seatIndex] = guestName;
            return { ...table, seats: newSeats };
        }
        return table;
    }));
  };
  
  const removeGuestFromSeat = (tableId: number, seatIndex: number, guestName: Guest) => {
    setTables(tables.map(table => {
      if (table.id === tableId) {
        const newSeats = [...table.seats];
        newSeats[seatIndex] = null;
        return { ...table, seats: newSeats };
      }
      return table;
    }));
    if (guestName && !unassignedGuests.includes(guestName)) {
        setUnassignedGuests([...unassignedGuests, guestName]);
    }
  };

  const rearrangeGuestsOnTable = (sourceTableId: number, sourceSeatIndex: number, targetTableId: number, targetSeatIndex: number) => {
    setTables(prevTables => {
        const sourceTable = prevTables.find(t => t.id === sourceTableId);
        const targetTable = prevTables.find(t => t.id === targetTableId);

        if (!sourceTable || !targetTable) return prevTables; // Safety check
        
        const guestToMove = sourceTable.seats[sourceSeatIndex];
        const guestToSwap = targetTable.seats[targetSeatIndex];
        
        const newTables = prevTables.map(table => {
            if (table.id === sourceTableId) {
                const newSeats = [...table.seats];
                newSeats[sourceSeatIndex] = guestToSwap;
                if (sourceTableId === targetTableId) {
                    newSeats[targetSeatIndex] = guestToMove;
                }
                return { ...table, seats: newSeats };
            }
            if (table.id === targetTableId && sourceTableId !== targetTableId) {
                const newSeats = [...table.seats];
                newSeats[targetSeatIndex] = guestToMove;
                return { ...table, seats: newSeats };
            }
            return table;
        });
        return newTables;
    });
  };

  const deleteTable = (tableId: number) => {
    const table = tables.find(t => t.id === tableId);
    if (table) {
      const guestsToReturn = table.seats.filter(guest => guest !== null) as Guest[];
      setUnassignedGuests([...unassignedGuests, ...guestsToReturn]);
      setTables(tables.filter(t => t.id !== tableId));
    }
  };

  const updateTableName = (tableId: number, newName: string) => {
    setTables(tables.map(table =>
      table.id === tableId ? { ...table, name: newName } : table
    ));
  };
    
  const updateTableCapacity = (tableId: number, newCapacity: number) => {
    setTables(tables.map(table => {
      if (table.id === tableId) {
        const guestsToReturn = table.seats.slice(newCapacity).filter(guest => guest !== null) as Guest[];
        if (guestsToReturn.length > 0) {
            setUnassignedGuests(prevGuests => [...prevGuests, ...guestsToReturn]);
        }
        const newSeats = createSeats(newCapacity, table.seats);
        return { ...table, capacity: newCapacity, seats: newSeats };
      }
      return table;
    }));
  };

  // ADDED: Function to update the table shape
  const updateTableShape = (tableId: number, newShape: TableShape) => {
    setTables(tables.map(table =>
      table.id === tableId ? { ...table, shape: newShape } : table
    ));
  };

  // --- Drag & Drop Handlers ---
  
  const handleDragStart = (e: DragEvent<HTMLDivElement>, guestName: Guest) => {
    e.dataTransfer.setData('guestName', guestName);
    e.dataTransfer.setData('sourceType', 'unassigned');
  };

  const handleSeatDrop = (e: DragEvent<HTMLDivElement>, targetTableId: number, targetSeatIndex: number) => {
    const guestName = e.dataTransfer.getData('guestName');
    const sourceType = e.dataTransfer.getData('sourceType');
    
    if (!guestName) return;

    if (sourceType === 'unassigned') {
      addGuestToSeat(targetTableId, guestName, targetSeatIndex);
    } else if (sourceType === 'seat') {
      const sourceTableId = parseInt(e.dataTransfer.getData('sourceTableId'));
      const sourceSeatIndex = parseInt(e.dataTransfer.getData('sourceSeatIndex'));
      
      if (sourceTableId === targetTableId && sourceSeatIndex === targetSeatIndex) {
          return;
      }
      
      rearrangeGuestsOnTable(sourceTableId, sourceSeatIndex, targetTableId, targetSeatIndex);
    }
  };
  
  const handleUnassignedDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const guestName = e.dataTransfer.getData('guestName');
      const sourceType = e.dataTransfer.getData('sourceType');
      
      if (sourceType === 'seat') {
          const sourceTableId = parseInt(e.dataTransfer.getData('sourceTableId'));
          const sourceSeatIndex = parseInt(e.dataTransfer.getData('sourceSeatIndex'));
          removeGuestFromSeat(sourceTableId, sourceSeatIndex, guestName);
      }
  };


  // --- Other Functions ---

  const exportArrangement = () => {
    let output = 'WEDDING SEATING ARRANGEMENT\n\n';
    tables.forEach(table => {
      const seated = getSeatedCount(table.seats);
      output += `${table.name} (${seated}/${table.capacity}, Shape: ${table.shape}):\n`;
      table.seats.forEach((guest, index) => {
        output += `  - Seat ${index + 1}: ${guest || 'Empty'}\n`;
      });
      output += '\n';
    });
    if (unassignedGuests.length > 0) {
      output += `Unassigned Guests (${unassignedGuests.length}):\n`;
      unassignedGuests.forEach(guest => {
        output += `  - ${guest}\n`;
      });
    }

    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seating-arrangement.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveProgress = () => {
    const data = {
      unassignedGuests,
      tables,
      savedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seating-arrangement-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      try {
        if (!event.target?.result) return;
        const data = JSON.parse(event.target.result as string);
        
        if (data.unassignedGuests && data.tables) {
          const loadedTables: Table[] = data.tables.map((t: any) => ({
              id: t.id || Date.now(),
              name: t.name || 'Imported Table',
              capacity: t.capacity || DEFAULT_CAPACITY,
              shape: t.shape || DEFAULT_SHAPE,
              seats: t.seats || createSeats(t.capacity || DEFAULT_CAPACITY, t.guests || []) 
          }));
          setUnassignedGuests(data.unassignedGuests);
          setTables(loadedTables);
          setShowUploadModal(false);
        } else {
          alert('Invalid file format. Please upload a valid seating arrangement file.');
        }
      } catch (error) {
        alert('Error reading file. Please make sure it\'s a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const addNewGuest = () => {
    const trimmedName = newGuestName.trim();
    const isAlreadySeated = tables.some(t => t.seats.includes(trimmedName));
    
    if (trimmedName && !unassignedGuests.includes(trimmedName) && !isAlreadySeated) {
        setUnassignedGuests([...unassignedGuests, trimmedName]);
        setNewGuestName(''); 
        setSearchQuery(''); 
        newGuestInputRef.current?.focus(); 
    } else if (unassignedGuests.includes(trimmedName) || isAlreadySeated) {
        alert(`Guest "${trimmedName}" is already on the list.`);
    }
  };

  const deleteUnassignedGuest = (guestName: Guest) => {
    setUnassignedGuests(unassignedGuests.filter(name => name !== guestName));
  };


  const filteredGuests = unassignedGuests.filter(guest =>
    guest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (showUploadModal) {
    // --- MODAL ---
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <Users className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Wedding Seating Planner</h1>
            <p className="text-gray-600">Upload your guest list or load saved progress</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Load Existing Arrangement
            </label>
            <input
              type="file"
              ref={fileInputRef}
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <FileUp className="w-5 h-5" />
              Load Saved File
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-semibold">OR START FRESH</span>
            </div>
          </div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Guest Names (one per line)
          </label>
          <textarea
            className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none font-mono text-sm"
            placeholder="John Smith&#10;Jane Doe&#10;Robert Johnson&#10;Mary Williams&#10;..."
            value={uploadText}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setUploadText(e.target.value)}
          />

          <button
            onClick={handleUpload}
            disabled={uploadText.trim().length === 0}
            className="w-full mt-4 bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Upload className="w-5 h-5" />
            Start Planning
          </button>
        </div>
      </div>
    );
  }

  return (
    // --- MAIN APP ---
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Wedding Seating Arrangement</h1>
            <div className="flex gap-2">
              <button
                onClick={saveProgress}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
              >
                <Save className="w-4 h-4" />
                Save Progress
              </button>
              <button
                onClick={exportArrangement}
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-pink-700">Total Guests:</span>{' '}
              <span className="text-pink-900">{unassignedGuests.length + tables.reduce((sum, t) => sum + getSeatedCount(t.seats), 0)}</span>
            </div>
            <div className="bg-purple-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-purple-700">Unassigned:</span>{' '}
              <span className="text-purple-900">{unassignedGuests.length}</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-blue-700">Tables:</span>{' '}
              <span className="text-blue-900">{tables.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div 
              className="lg:sticky lg:top-6 bg-white rounded-lg shadow-lg p-6"
              onDragOver={(e: DragEvent<HTMLDivElement>) => e.preventDefault()}
              onDrop={handleUnassignedDrop}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Unassigned Guests</h2>
              <p className="text-sm text-gray-500 mb-4">Drag guests to a seat, or drag seated guests back here to unassign them.</p>

              <div className="flex mb-4 gap-2">
                <input
                  type="text"
                  placeholder="Add new guest name..."
                  value={newGuestName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewGuestName(e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      addNewGuest();
                    }
                  }}
                  ref={newGuestInputRef}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                />
                <button
                  onClick={addNewGuest}
                  disabled={newGuestName.trim().length === 0}
                  className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
                  title="Add Guest"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guests..."
                  value={searchQuery}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 420px)' }}>
                {filteredGuests.length === 0 && unassignedGuests.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">All guests assigned! 🎉</p>
                ) : filteredGuests.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No guests found</p>
                ) : (
                  filteredGuests.map((guest) => (
                    <div
                      key={guest}
                      className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-move flex items-center justify-between"
                      draggable
                      onDragStart={(e: DragEvent<HTMLDivElement>) => handleDragStart(e, guest)}
                    >
                      <p className="text-gray-800 truncate">{guest}</p>
                      <button
                        onClick={(e) => {
                            e.stopPropagation(); 
                            deleteUnassignedGuest(guest);
                        }}
                        className="text-red-400 hover:text-red-600 transition ml-2 p-1"
                        title={`Delete ${guest}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-4">
              <button
                onClick={addTable}
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
              >
                <Plus className="w-4 h-4" />
                Add Table
              </button>
            </div>

            <div className="space-y-6">
              {tables.map((table) => (
                <div
                  key={table.id}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
                >
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <input
                      type="text"
                      value={table.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => updateTableName(table.id, e.target.value)}
                      className="text-xl font-bold text-gray-800 border-b-2 border-transparent hover:border-gray-300 focus:border-pink-500 focus:outline-none px-2 cursor-text w-auto"
                      style={{ minWidth: '150px' }}
                    />
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Hash className="w-4 h-4 text-purple-500" />
                            <select
                                value={table.capacity}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => updateTableCapacity(table.id, parseInt(e.target.value))}
                                className="bg-white border border-gray-300 rounded-lg p-1 text-sm font-semibold focus:ring-purple-500 focus:border-purple-500"
                            >
                                {CAPACITY_OPTIONS.map(cap => (
                                    <option key={cap} value={cap}>
                                        {cap}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/* ADDED: Shape selector */}
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Disc className="w-4 h-4 text-blue-500" />
                            <select
                                value={table.shape}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => updateTableShape(table.id, e.target.value as TableShape)}
                                className="bg-white border border-gray-300 rounded-lg p-1 text-sm font-semibold focus:ring-blue-500 focus:border-blue-500 capitalize"
                            >
                                {TABLE_SHAPES.map(shape => (
                                    <option key={shape} value={shape}>{shape}</option>
                                ))}
                            </select>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeatedCount(table.seats) === table.capacity
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                            {getSeatedCount(table.seats)}/{table.capacity}
                        </span>
                        <button
                            onClick={() => deleteTable(table.id)}
                            className="text-red-500 hover:text-red-700 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                  </div>

                  <TableLayout
                    table={table}
                    onDragStart={() => {}} // Placeholder
                    onDragOver={() => {}} // Placeholder
                    onDrop={handleSeatDrop}
                    onRemove={removeGuestFromSeat}
                  />

                </div>
              ))}

              {tables.length === 0 && (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No tables yet. Click "Add Table" to create your first table!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}