import React from 'react'
import './privacy.css'
import { useState } from 'react'
const Privacy = () => {
    const [select,setSelect] = useState(null)
    const toggle = (i) => {
        if(select === i) {
            return setSelect(null)
        }
        setSelect(i)
    }
    const data = [{
        question:'Information we collect',
        answer:'We will collect personal data on this Website only if it is directly provided to us by you the user, e.g. your e-mail address, name, home or work address and telephone number, and therefore has been provided by you with your consent. Normally you will only provide such details if you wish to sign up for our free e-newsletter or other resources, or are making a purchase from us.We also use analytical and statistical tools that monitor details of your visits to our website and the resources that you access, including, but not limited to, traffic data, location data, weblogs and other communication data (but this data will not identify you personally).Your payment information (e.g. credit card details) provided when you make a purchase from our website is not received or stored by us. That information is processed securely and privately by the third party payment processors that we use. The Eggfree Cakebox will not have access to that information at any time. We may share your personal data with our payment processors, but only for the purpose of completing the relevant payment transaction. Such payment processors are banned from using your personal data, except to provide these necessary payment services to us, and they are required to maintain the confidentiality of your personal data and payment information'
    },
    {
        question:'Use of your information',
        answer:'We may hold and process personal data that you provide to us in accordance with the DPA and GDPR.The information that we collect and store relating to you is primarily used to enable us to provide our services to you, and to meet our contractual commitments to you. In addition, we may use the information for the following purposes:To notify you about any changes to our website, such as improvements or service/product changes, that may affect our service;If you are an existing customer, we may contact you with information about goods and services similar to those that were the subject of a previous sale to you;Where you have consented to receive our e-newsletters, from time to time to provide that to you.All photos sent to any of our shops are only held for the duration of the order and are deleted straight after to comply with GDPR.'
    },
    {
        question:'Disclosure of your information',
        answer:'We may disclose your information to regulatory bodies to enable us to comply with the law and to assist fraud protection and minimise credit risk.Please be advised that we do not reveal information about identifiable individuals to our advertisers but we may, on occasion, provide them with aggregate statistical information about our visitors.'
    },
    {
        question:'Your Rights',
        answer:'The DPA and GDPR give you the right to access information held about you by us. Please write to us or contact us by email if you wish to request confirmation of what personal information we hold relating to you. You can write to us at the address detailed in clause 2, above, or by email to info@eggfreecake.co.uk There is no charge for requesting that we provide you with details of the personal data that we hold. We will provide this information within one month of your requesting the data.You have the right to change the permissions that you have given us in relation to how we may use your data. You also have the right to request that we cease using your data or that we delete all personal data records that we hold relating to you. You can exercise these rights at any time by writing to us at the address detailed in clause 2, above, or by email to Info@eggfreecake.co.uk'
    }
        ]
  return (
    <div className='privacy-policy'>
        <div className='privacy'>
            <h2>Privacy Policy</h2>
        </div>
        <div className='content-show'>
            <p style={{marginLeft:'1.5rem'}}>This Privacy Policy describes how your personal information is collected, Used and Shared when you visit or make a purchase from Website</p>
        </div>
        <div className='accordian'>
            {data.map((item,i) => (
                <div className='item'>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{select === i ? '-' : '+'}</span>
                    </div>
                    <div className= {select === i ? 'content.show' : 'content'}>
                        {item.answer}
                    </div>  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Privacy
