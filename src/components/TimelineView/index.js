// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="TimelineContainer">
      <div className="ResponsiveContainer">
        <div className="HeaderContainer">
          <h1 className="Heading">
            MY JOURNEY OF <br />
            <span className="CCBPHeading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
