import React from 'react'
import{VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Career = () => {
  return (
    <div className='Career'>
      <VerticalTimeline lineColor='rgb(0, 0, 0)'>

      <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2022 - Present'
          iconStyle={{background: "rgb(0, 0, 0)", color: "white"}}
          icon = {<WorkIcon/>}
          >

            <h3 className='vertical-timeline-element-tittle'>

              Integrass Technical Services, Trichy

            </h3>

            <p>Intern </p>

        </VerticalTimelineElement>      

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2018 - 2021'
          iconStyle={{background: "#3e497a", color: "white"}}
          icon = {<SchoolIcon/>}
          >

            <h3 className='vertical-timeline-element-tittle'>

              Bishop Heber College, Trichy

            </h3>

            <p>Bsc. Chemistry | 73% </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2016 - 2018'
          iconStyle={{background: "#3e497a", color: "white"}}
          icon = {<SchoolIcon/>}
          >

            <h3 className='vertical-timeline-element-tittle'>

              Bishop Heber HR.SEC.School, Trichy

            </h3>

            <p> HSC | 80% </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2015 - 2016'
          iconStyle={{background: "#3e497a", color: "white"}}
          icon = {<SchoolIcon/>}
          >

            <h3 className='vertical-timeline-element-tittle'>

              St.Joseph's College HR.SEC.School, Trichy

            </h3>

            <p>SSLC | 85% </p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Career