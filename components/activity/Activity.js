import React from 'react'
import ActivityBox from './activityBox'
import MTURUN from '../../public/images/activity/mtu_run.jpg'
import HighSchoolAward from '../../public/images/activity/high_school_award.jpg';
import CleanCampus from '../../public/images/activity/clean_campus.jpg'; 
import MTURUNPrize from '../../public/images/activity/mtu_run_prize.jpg';
import MOngoDBCertificate from '../../public/images/activity/mongodb.jpg';
import RedisCertificate from '../../public/images/activity/redis.jpg';

function Activity() {
  return (
    <div className='activity-section mt-5 pt-5'>
        <div className='container'>
            <div className='text-center'>
                <span className='text-3'>Activity & Achievement</span>
            </div>
            <div className='row mt-5 g-3'>
                <ActivityBox img={MTURUN} label="MTU-RUN 2018 third winner team" />
                <ActivityBox img={MTURUNPrize} label="MTU-RUN 2018 third winner team" />
                <ActivityBox img={CleanCampus} 
                label="University campus clean activity" />
                <ActivityBox img={HighSchoolAward} label="Nothern Shan State Top 5th student award 2017" />
                <ActivityBox img={MOngoDBCertificate} 
                  label={<>MongoDB Certificates
                  <a className='ms-1' target="_blank" href='https://www.linkedin.com/in/sai-marn-pha-071115237'>See More</a></>} />
                <ActivityBox img={RedisCertificate} 
                  label={<>Redis Certificates 
                  <a className='ms-1' target="_blank" href='https://www.linkedin.com/in/sai-marn-pha-071115237'>See More</a></>} />
            </div>
        </div>
    </div>
  )
}

export default Activity