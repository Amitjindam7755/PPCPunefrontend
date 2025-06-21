import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminMatrimonyCandidateProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [editProfile, setEditProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const fetchProfiles = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const res = await axios.get('http://localhost:8081/api/profile/profiles', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfiles(res.data);
    } catch (err) {
      console.error('Error fetching profiles:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this profile?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8081/api/profile/profiles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfiles(profiles.filter((profile) => profile.id !== id));
      alert('Profile deleted successfully');
    } catch (err) {
      alert('Error deleting profile: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  const handleEdit = (profile) => {
    setEditProfile(profile);
    setFormData({ ...profile });
  };

  const handleUpload = async (profile) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:8081/api/profile/upload-profile/${profile.id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile uploaded successfully to Matches gallery!');
    } catch (err) {
      alert('Error uploading profile: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.files[0] }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key !== 'profile_photo' && key !== 'janmapatrika') {
          data.append(key, formData[key]);
        }
      });

      if (formData.profile_photo instanceof File) {
        data.append('profile_photo', formData.profile_photo);
      }
      if (formData.janmapatrika instanceof File) {
        data.append('janmapatrika', formData.janmapatrika);
      }

      await axios.put(`http://localhost:8081/api/profile/profiles/${editProfile.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setEditProfile(null);
      fetchProfiles();
      alert('Profile updated successfully');
    } catch (err) {
      alert('Error updating profile: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Matrimonial Profiles</h2>
      {profiles.length === 0 ? (
        <p className="text-center text-gray-500">No profiles available.</p>
      ) : (
        <div>
          {/* Table View: Hidden on small screens */}
          <div className="hidden md:block overflow-x-auto min-w-0">
            <table className="w-full border table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Profile For</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Name</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Gender</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">DOB</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Email</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Mobile</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Religion</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Caste</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Occupation</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Education</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Location</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Height</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">About</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Profile Photo</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">BioData</th>
                  <th className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => (
                  <tr key={profile.id}>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.profile_for}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.name}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.gender}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.dob}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.email}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.mobile}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.religion}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.caste}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.occupation}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.education}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.location}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm whitespace-nowrap">{profile.height}</td>
                    <td className="border px-2 py-1 text-xs sm:text-sm">{profile.about}</td>
                    <td className="border px-2 py-1">
                      {profile.profile_photo ? (
                        <img
                          src={`http://localhost:8081/${profile.profile_photo}`}
                          alt="Profile"
                          className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                        />
                      ) : (
                        'No Photo'
                      )}
                    </td>
                    <td className="border px-2 py-1">
                      {profile.biodata ? (
                        <a
                          href={`http://localhost:8081/${profile.biodata}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline text-xs sm:text-sm"
                        >
                          View BioData
                        </a>
                      ) : (
                        'No BioData'
                      )}
                    </td>
                    <td className="border px-2 py-1">
                      <button
                        onClick={() => handleEdit(profile)}
                        className="bg-blue-500 text-white px-1 sm:px-2 py-1 rounded text-xs sm:text-sm mr-1 sm:mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleUpload(profile)}
                        className="bg-green-500 text-white px-1 sm:px-2 py-1 rounded text-xs sm:text-sm mr-1 sm:mr-2"
                      >
                        Upload
                      </button>
                      <button
                        onClick={() => handleDelete(profile.id)}
                        className="bg-red-500 text-white px-1 sm:px-2 py-1 rounded text-xs sm:text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card View: Visible on small screens */}
          <div className="block md:hidden space-y-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="border rounded-lg p-4 bg-white shadow">
                <div className="grid grid-cols-1 gap-2">
                  <div>
                    <span className="font-semibold text-sm">Profile For:</span> {profile.profile_for}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Name:</span> {profile.name}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Gender:</span> {profile.gender}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">DOB:</span> {profile.dob}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Email:</span> {profile.email}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Mobile:</span> {profile.mobile}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Religion:</span> {profile.religion}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Caste:</span> {profile.caste}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Occupation:</span> {profile.occupation}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Education:</span> {profile.education}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Location:</span> {profile.location}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Height:</span> {profile.height}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">About:</span> {profile.about}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">Profile Photo:</span>
                    {profile.profile_photo ? (
                      <img
                        src={`http://localhost:8081/${profile.profile_photo}`}
                        alt="Profile"
                        className="w-16 h-16 object-cover rounded mt-1"
                      />
                    ) : (
                      <span> No Photo</span>
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-sm">BioData:</span>
                    {profile.biodata ? (
                      <a
                        href={`http://localhost:8081/${profile.biodata}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline ml-1 text-sm"
                      >
                        View BioData
                      </a>
                    ) : (
                      <span> No BioData</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={() => handleEdit(profile)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleUpload(profile)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {editProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-lg sm:max-w-md overflow-y-auto max-h-[90vh]">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-black">Edit Profile</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1 text-black">Profile For</label>
                <select
                  name="profile_for"
                  value={formData.profile_for || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                  required
                >
                  <option value="">Profile For</option>
                  <option value="Self">Self</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Relative/Friend">Relative/Friend</option>
                  <option value="Marriage Bureau">Marriage Bureau</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Gender</label>
                <select
                  name="gender"
                  value={formData.gender || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Religion</label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Caste</label>
                <input
                  type="text"
                  name="caste"
                  value={formData.caste || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Height</label>
                <input
                  type="text"
                  name="height"
                  value={formData.height || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">About</label>
                <textarea
                  name="about"
                  value={formData.about || ''}
                  onChange={handleChange}
                  className="w-full p-2 rounded border text-sm"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">Profile Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'profile_photo')}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black">BioData</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileChange(e, 'janmapatrika')}
                  className="w-full p-2 rounded border text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditProfile(null)}
                  className="bg-gray-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMatrimonyCandidateProfile;
