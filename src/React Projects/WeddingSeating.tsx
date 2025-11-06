import React, { useState } from 'react';
import { Users, Plus, X, Upload, Download, Search } from 'lucide-react';

export default function WeddingSeating() {
  const [unassignedGuests, setUnassignedGuests] = useState([]);
  const [tables, setTables] = useState([]);
  const [uploadText, setUploadText] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpload = () => {
    const names = uploadText
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    setUnassignedGuests(names);
    setShowUploadModal(false);
  };

  const addTable = () => {
    const newTable = {
      id: Date.now(),
      name: `Table ${tables.length + 1}`,
      guests: []
    };
    setTables([...tables, newTable]);
  };

  const addGuestToTable = (tableId, guestName) => {
    setTables(tables.map(table =>
      table.id === tableId && table.guests.length < 8
        ? { ...table, guests: [...table.guests, guestName] }
        : table
    ));
    setUnassignedGuests(unassignedGuests.filter(name => name !== guestName));
  };

  const removeGuestFromTable = (tableId, guestName) => {
    setTables(tables.map(table =>
      table.id === tableId
        ? { ...table, guests: table.guests.filter(name => name !== guestName) }
        : table
    ));
    setUnassignedGuests([...unassignedGuests, guestName]);
  };

  const deleteTable = (tableId) => {
    const table = tables.find(t => t.id === tableId);
    if (table) {
      setUnassignedGuests([...unassignedGuests, ...table.guests]);
      setTables(tables.filter(t => t.id !== tableId));
    }
  };

  const updateTableName = (tableId, newName) => {
    setTables(tables.map(table =>
      table.id === tableId ? { ...table, name: newName } : table
    ));
  };

  const exportArrangement = () => {
    let output = 'WEDDING SEATING ARRANGEMENT\n\n';
    tables.forEach(table => {
      output += `${table.name} (${table.guests.length}/8):\n`;
      table.guests.forEach(guest => {
        output += `  - ${guest}\n`;
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
  };

  const filteredGuests = unassignedGuests.filter(guest =>
    guest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (showUploadModal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <Users className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Wedding Seating Planner</h1>
            <p className="text-gray-600">Upload your guest list to get started</p>
          </div>

          <textarea
            className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none font-mono text-sm"
            placeholder="Enter guest names, one per line:&#10;&#10;John Smith&#10;Jane Doe&#10;Robert Johnson&#10;..."
            value={uploadText}
            onChange={(e) => setUploadText(e.target.value)}
          />

          <button
            onClick={handleUpload}
            className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Upload className="w-5 h-5" />
            Start Planning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">Wedding Seating Arrangement</h1>
            <button
              onClick={exportArrangement}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="flex gap-4 text-sm">
            <div className="bg-pink-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-pink-700">Total Guests:</span>{' '}
              <span className="text-pink-900">{unassignedGuests.length + tables.reduce((sum, t) => sum + t.guests.length, 0)}</span>
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
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Unassigned Guests</h2>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredGuests.length === 0 && unassignedGuests.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">All guests assigned! 🎉</p>
                ) : filteredGuests.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No guests found</p>
                ) : (
                  filteredGuests.map((guest, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition cursor-move"
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('guest', guest)}
                    >
                      <p className="text-gray-800">{guest}</p>
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

            <div className="space-y-4">
              {tables.map(table => (
                <div
                  key={table.id}
                  className="bg-white rounded-lg shadow-lg p-6"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const guest = e.dataTransfer.getData('guest');
                    if (guest && table.guests.length < 8) {
                      addGuestToTable(table.id, guest);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <input
                      type="text"
                      value={table.name}
                      onChange={(e) => updateTableName(table.id, e.target.value)}
                      className="text-xl font-bold text-gray-800 border-b-2 border-transparent hover:border-gray-300 focus:border-pink-500 focus:outline-none px-2"
                    />
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${table.guests.length === 8
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }`}>
                        {table.guests.length}/8
                      </span>
                      <button
                        onClick={() => deleteTable(table.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {table.guests.map((guest, idx) => (
                      <div
                        key={idx}
                        className="bg-pink-50 p-3 rounded-lg flex items-center justify-between group hover:bg-pink-100 transition"
                      >
                        <span className="text-gray-800 text-sm">{guest}</span>
                        <button
                          onClick={() => removeGuestFromTable(table.id, guest)}
                          className="text-red-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {[...Array(8 - table.guests.length)].map((_, idx) => (
                      <div
                        key={`empty-${idx}`}
                        className="bg-gray-50 p-3 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                      >
                        Empty seat
                      </div>
                    ))}
                  </div>
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