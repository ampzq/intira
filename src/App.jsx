import moment from 'moment';
import './App.css'
import {   useEffect, useState } from 'react';

import  axios  from 'axios';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';
import { TitleRight } from './components/TitleRight';

const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfile images="/src/assets/profile.png" />

          <Title title="INTIRA ARSAIPHOL">
            <p>Graphic User Interface (UI)</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2003/10/10").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: +66065-552-1473</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: ampoooo1510@gmail.com</p>
          </Title>

          <Title title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ เกรดเฉลี่ย 3.56 </p>
            <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
          </Title>

        </div>

      


        <div className="rightPort">

          <TitleRight titles="Profile">
            <p>กต้องการนํา ความรู้ ความสามารถและ
              ประสบการณ์ของตนเองเพื่อเป็นส่วน
              หนึ่งของการพัฒนาองค์กรในขณะที่พัฒ
              ศักยภาพของตนเองให้ก้าวหน้าควบคู่ไปด้วย
            </p>
          </TitleRight>


          <TitleRight titles="workExpreience">
            <p className='headers-details'>นักศึกษาฝึกงาน</p>
            <ul>
              <li>ที่ สํา นักงานคลังจังหวัดชุมพร ศูนย์ราชการจังหวัดชุมพร ทํา หน้าที่คีย์
                ข้อมูลเข้าระบบและเช็คระบบของคลังจังหวัด
              </li>
            </ul>
            <p className='headers-details'>
            ผ่านการอบรมโครงการอบรมกราฟิกและแอนิเมชั่น
            </p>
            <ul>
              <li>เช็คราคาสินค้าต่างๆในคลังโดยทํา งานรูปแบบออนไลน์</li>
            </ul>
            <p className='headers-details'>
            ผ่านการทํา โปรเจคเรื่องการศึกษาและพัฒนาเว็บเพื่อให้ความรู้
              เกี่ยวกับการออกแบบที่ถูกต้องและการศึกษาการเกิดก๊าซเรือน
              กระจกจาการใช้ไฟฟ้า
            </p>
            <ul>
              <li>ทํา เว็บไซต์ที่ให้ความรู้เกี่ยวการออกแบบเว็บไซต์และสามารถคํา นวณ
                ก๊าซเรือนกระจกจากการใช้ไฟฟ้า</li>
            </ul>
          </TitleRight>
        

          <TitleRight titles="skill">
            
            <ul>
              <li>สามารถออกแบบสื่อสิ่งพิมพ์</li>
              <li>ออกแบบอินโฟกราฟิก</li>
              <li>ออกแบบเว็บไซต์</li>
            </ul>
          </TitleRight>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
        {data.map((record) => 
          <div key={record.code}>
               {record.code}
                {record.name}
           </div>
           )}
      </div>
    </>
  )
}


export default App