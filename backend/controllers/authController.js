const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const jwtConfig = require('../config/jwt');

exports.register = async (req, res) => {
  try {
    const { username, fullName, email, phone, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Vui lòng cung cấp đầy đủ thông tin bắt buộc' 
      });
    }

    // Kiểm tra tài khoản đã tồn tại
    const existingEmail = await User.findByEmail(email);
    if (existingEmail) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email đã được sử dụng'
      });
    }

    const user = new User({
      username,
      fullName,
      email,
      phone,
      password
    });

    const newUser = await user.register();

    res.status(201).json({
      success: true,
      message: 'Đăng ký thành công',
      data: newUser
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Đã xảy ra lỗi khi đăng ký',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Vui lòng cung cấp username và password'
      });
    }

    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Thông tin đăng nhập không chính xác'
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Thông tin đăng nhập không chính xác'
      });
    }

    // Tạo JWT token với expiresIn từ config
    const token = jwt.sign(
      { 
        id: user.id, 
        role: user.role 
      },
      jwtConfig.secret,
      { 
        expiresIn: jwtConfig.expiresIn 
      }
    );

    res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công',
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.full_name, 
        phone: user.phone,        
        role: user.role
      },
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Đã xảy ra lỗi khi đăng nhập',
      error: error.message
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    // Lấy thông tin người dùng từ middleware auth
    const userId = req.user.id;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'Không tìm thấy thông tin người dùng'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Đã xảy ra lỗi khi lấy thông tin người dùng',
      error: error.message
    });
  }
};