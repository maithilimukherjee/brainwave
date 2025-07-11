import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
        helping people create beautiful content at
      </h5>

      <ul className='flex flex-wrap items-center justify-center gap-6 sm:gap-10'>
        {companyLogos.map((logo, index) => (
          <li
            className='flex items-center justify-center h-[8.5rem] flex-shrink-0'
            key={index}
          >
            <img
              src={logo}
              width={134}
              height={28}
              alt={`Company logo ${index + 1}`}
              className='object-contain max-w-[134px] max-h-[28px]'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
