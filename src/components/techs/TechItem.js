import React from 'react'
import PropTypes from 'prop-types'
import { deleteTech } from '../../actions/techActions'
import { connect } from 'react-redux'

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => deleteTech(tech.id)
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}
TechItem.propTypes = {
  tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech })(TechItem)
