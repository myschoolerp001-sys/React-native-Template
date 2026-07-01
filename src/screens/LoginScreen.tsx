import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const LoginScreen: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Top Design */}
      <View className="bg-blue-600 h-48 rounded-b-[40px] items-center justify-center mb-8">
        <Text className="text-white text-5xl font-bold">🚖</Text>
        <Text className="text-white text-xl font-semibold mt-2">CaptainRide</Text>
      </View>

      <View className="px-6">
        {/* Heading */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-slate-900">
            {otpSent ? "Verify OTP" : "Welcome Back!"}
          </Text>
          <Text className="text-slate-500 text-base mt-1">
            {otpSent 
              ? `Code sent to +91 ${phone}` 
              : "Sign in to book your ride"}
          </Text>
        </View>

        {/* Phone Input */}
        {!otpSent && (
          <View className="flex-row items-center bg-slate-100 rounded-2xl border border-slate-200 mb-4 px-4">
            <Text className="text-slate-500 text-lg mr-2">🇮🇳 +91</Text>
            <TextInput
              className="flex-1 py-4 text-lg text-slate-900"
              placeholder="Mobile Number"
              keyboardType="number-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
              placeholderTextColor="#94a3b8"
            />
          </View>
        )}

        {/* OTP Input */}
        {otpSent && (
          <View className="bg-slate-100 rounded-2xl border border-slate-200 mb-4 px-4">
            <TextInput
              className="py-4 text-2xl text-slate-900 text-center tracking-widest"
              placeholder="• • • • • •"
              keyboardType="number-pad"
              maxLength={6}
              value={otp}
              onChangeText={setOtp}
              placeholderTextColor="#94a3b8"
            />
          </View>
        )}

        {/* Main Button */}
        <TouchableOpacity
          className="bg-blue-600 py-4 rounded-2xl items-center mt-2"
          onPress={() => setOtpSent(!otpSent)}
          activeOpacity={0.85}
        >
          <Text className="text-white text-lg font-bold">
            {otpSent ? "Verify & Continue" : "Send OTP"}
          </Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        {otpSent && (
          <TouchableOpacity 
            className="items-center mt-4"
            onPress={() => setOtpSent(false)}
          >
            <Text className="text-blue-600 text-base font-medium">
              Change Number / Resend OTP
            </Text>
          </TouchableOpacity>
        )}

        {/* Terms */}
        <Text className="text-center mt-8 text-slate-400 text-sm">
          By continuing, you agree to our{" "}
          <Text className="text-blue-600">Terms & Conditions</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;