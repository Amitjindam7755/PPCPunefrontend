import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We value your privacy. This policy explains how we collect, use, and protect your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>Name, email, and phone number (when you fill out forms)</li>
        <li>Usage data (pages visited, IP address, device info)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>To provide and maintain services</li>
        <li>To contact you regarding your bookings or queries</li>
        <li>To improve website functionality and security</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        Your data is stored securely and we take steps to prevent unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Sharing</h2>
      <p className="mb-4">
        We do not share your personal information with third parties except where required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your information by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. Changes will be posted on this page.
      </p>

      <p className="mt-6">Last updated: June 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
