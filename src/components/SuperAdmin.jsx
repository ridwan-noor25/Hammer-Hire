import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, CheckCircle } from 'lucide-react';

const SuperAdmin = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  const endpoint = 'http://localhost:3000/usersMessage';

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(endpoint);
      setRequests(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        await axios.delete(`${endpoint}/${id}`);
        fetchRequests();
      } catch (error) {
        console.error("Delete failed", error);
      }
    }
  };

  const handleStatusToggle = async (id) => {
    const request = requests.find((r) => r.id === id);
    const newStatus = request.status === "completed" ? "pending" : "completed";

    try {
      await axios.patch(`${endpoint}/${id}`, { status: newStatus });
      fetchRequests();
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const handleEdit = (request) => {
    setEditId(request.id);
    setUpdatedData(request);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`${endpoint}/${editId}`, updatedData);
      setEditId(null);
      fetchRequests();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Full Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b hover:bg-gray-100">
                  {editId === req.id ? (
                    <>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          name="fullName"
                          value={updatedData.fullName}
                          onChange={handleUpdateChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="email"
                          name="email"
                          value={updatedData.email}
                          onChange={handleUpdateChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                       
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          name="message"
                          value={updatedData.message}
                          onChange={handleUpdateChange}
                          className="border rounded px-2 py-1 w-full"
                        />
                      </td>
                      <td className="px-4 py-2">{req.status || "pending"}</td>
                      <td className="px-4 py-2 space-x-2">
                        <button
                          onClick={handleUpdateSubmit}
                          className="text-green-600 hover:text-green-800"
                          title="Save"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="text-gray-600 hover:text-gray-800"
                          title="Cancel"
                        >
                          ✕
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-3">{req.fullName}</td>
                      <td className="px-4 py-3">{req.email}</td>
                      <td className="px-4 py-3">{req.message}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            req.status === "completed"
                              ? "bg-green-200 text-green-800"
                              : "bg-yellow-200 text-yellow-800"
                          }`}
                        >
                          {req.status || "pending"}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex space-x-3">
                        <button
                          onClick={() => handleStatusToggle(req.id)}
                          className="text-blue-600 hover:text-blue-800"
                          title="Toggle Status"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button
                          onClick={() => handleEdit(req)}
                          className="text-yellow-500 hover:text-yellow-700"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(req.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SuperAdmin;
