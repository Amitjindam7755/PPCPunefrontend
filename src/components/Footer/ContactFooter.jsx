import React from 'react'
import { useTranslation } from 'react-i18next'


const ContactFooter = () => {

  const {t} = useTranslation();

  return (
      <p className="text-center text-md font-semibold text-gray-600">
        {t('Copyright 2025 © Pune Padmashali Panch Committee | Developed By AJ Group of companies Pvt Ltd - All Rights Reserved.')}
      </p>
  )
}

export default ContactFooter

