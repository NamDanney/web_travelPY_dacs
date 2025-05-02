import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

const ProfileForm = () => {
    const { user, login } = useAuth();
    const [formData, setFormData] = useState({
        username: user?.username || '',
        fullName: user?.fullName || '',
        email: user?.email || '',
        phone: user?.phone || ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setLoading(true);
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');
            const response = await axios.put(
                `http://localhost:5000/api/users/${user.id}`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                setShowSuccessModal(true);
                login(response.data.data);
                setIsEditing(false);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Có lỗi xảy ra khi cập nhật thông tin');
        } finally {
            setLoading(false);
        }
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="profile-form-wrapper">
            <div className="profile-header">
                <div className="header-content">
                    <h1>Thông tin cá nhân</h1>
                    <p className="header-subtitle">Quản lý thông tin cá nhân của bạn</p>
                </div>
                <div className="profile-actions">
                    {!isEditing && (
                        <button 
                            className="btn-edit"
                            onClick={() => setIsEditing(true)}
                        >
                            <i className="bi bi-pencil"></i>
                            Chỉnh sửa
                        </button>
                    )}
                </div>
            </div>

            {error && <div className="profile-alert profile-alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="profile-form">
                <div className="profile-form-group">
                    <label>
                        <i className="bi bi-person"></i>
                        Tên đăng nhập
                    </label>
                    <input
                        type="text"
                        value={formData.username}
                        disabled
                    />
                </div>

                <div className="profile-form-group">
                    <label>
                        <i className="bi bi-person-vcard"></i>
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                <div className="profile-form-group">
                    <label>
                        <i className="bi bi-envelope"></i>
                        Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                <div className="profile-form-group">
                    <label>
                        <i className="bi bi-telephone"></i>
                        Số điện thoại
                    </label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        disabled={!isEditing}
                    />
                </div>

                {isEditing && (
                    <div className="form-actions">
                        <button 
                            type="button" 
                            className="btn-cancel"
                            onClick={() => setIsEditing(false)}
                        >
                            <i className="bi bi-x"></i>
                            Hủy
                        </button>
                        <button 
                            type="submit" 
                            className="btn-save"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <i className="bi bi-hourglass-split"></i>
                                    Đang lưu...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-check2"></i>
                                    Lưu thay đổi
                                </>
                            )}
                        </button>
                    </div>
                )}
            </form>

            {showSuccessModal && (
                <div className="profile-modal-overlay">
                    <div className="profile-success-modal">
                        <div className="profile-success-icon">
                            <i className="bi bi-check-circle-fill"></i>
                        </div>
                        <h3>Cập nhật thành công!</h3>
                        <p>Thông tin của bạn đã được cập nhật.</p>
                        <button className="btn-modal-ok" onClick={handleSuccessModalClose}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileForm;