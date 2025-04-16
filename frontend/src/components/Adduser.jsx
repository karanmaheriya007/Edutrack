import { useState } from "react";
import { Link } from "react-router-dom";

const Adduser = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        userType: "",
        gender: "",
        district: "",
        block: "",
        school: "",
        photo: null,
    });

    const [errors, setErrors] = useState({});
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
                setFormData({ ...formData, photo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Valid 10-digit phone number is required.";
        if (!formData.userType) newErrors.userType = "User type is required.";
        if (!formData.gender) newErrors.gender = "Gender is required.";
        if (!formData.district) newErrors.district = "District is required.";
        if (!formData.block) newErrors.block = "Block is required.";
        if (!formData.school) newErrors.school = "School is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("User added successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                userType: "",
                gender: "",
                district: "",
                block: "",
                school: "",
                photo: null,
            });
            setPhoto(null);
            setErrors({});
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="adduser_container font-nunito">
            <p className="text-2xl sm:text-3xl font-bold pt-5">Add User</p>
            <div className="bg-white py-6 md:py-10 rounded-lg border-[#D5D5D5] border mt-10">
                <form className="space-y-6 px-6 md:px-20 lg:px-40" onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center gap-5 pb-5">
                        <div className="w-20 h-20 rounded-full bg-[#ECECEE] flex items-center justify-center text-xl font-bold text-blue-500 overflow-hidden">
                            {photo ? (
                                <img src={photo} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <span>
                                    <img src="/src/assets/images/camera.svg" alt="Upload" />
                                </span>
                            )}
                        </div>
                        <label
                            htmlFor="photoUpload"
                            className="text-[#4379EE] text-sm font-semibold cursor-pointer"
                        >
                            Upload Photo
                        </label>
                        <input
                            id="photoUpload"
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
                        {/* First Name */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-normal"
                            />
                            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
                        </div>
                        {/* Last Name */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-normal"
                            />
                            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-normal"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>
                        {/* Phone */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-normal"
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        </div>
                        {/* User Type */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">User Type</label>
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                className="custom-select mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-bold"
                            >
                                <option value="">Select User Type</option>
                                <option>Principal</option>
                                <option>Teacher</option>
                            </select>
                            {errors.userType && <span className="text-red-500 text-sm">{errors.userType}</span>}
                        </div>
                        {/* Gender */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="custom-select mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-bold"
                            >
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
                        </div>
                        {/* District */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Select District</label>
                            <select
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                className="custom-select mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-bold"
                            >
                                <option value="">Select District</option>
                                <option>Dehradun</option>
                                <option>Haridwar</option>
                            </select>
                            {errors.district && <span className="text-red-500 text-sm">{errors.district}</span>}
                        </div>
                        {/* Block */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Select Block</label>
                            <select
                                name="block"
                                value={formData.block}
                                onChange={handleChange}
                                className="custom-select mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-bold"
                            >
                                <option value="">Select Block</option>
                                <option>Vikasnagar</option>
                                <option>Doiwala</option>
                            </select>
                            {errors.block && <span className="text-red-500 text-sm">{errors.block}</span>}
                        </div>
                        {/* School */}
                        <div>
                            <label className="text-[#606060] font-semibold block text-sm pb-2">Select School</label>
                            <select
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                className="custom-select mt-1 py-3 px-3 bg-[#F5F6FA] md:px-4 w-full border-[#D5D5D5] border rounded-md focus:outline-none text-sm font-bold"
                            >
                                <option value="">Select School</option>
                                <option>GIC Dehradun</option>
                                <option>GIC Haridwar</option>
                            </select>
                            {errors.school && <span className="text-red-500 text-sm">{errors.school}</span>}
                        </div>
                    </div>
                    <div className="flex md:gap-10 gap-4 pt-2 md:pt-5">
                        <button
                            type="submit"
                            className="w-1/2 py-3 bg-[#4880FF] text-[18px] font-bold text-white rounded-md"
                        >
                            Add Now
                        </button>
                        <Link to="/users" className="contents">
                            <button
                                type="button"
                                className="w-1/2 py-3 bg-gray-300 text-gray-700 text-[18px] font-bold rounded-md"
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Adduser;
