import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/styles/withStyles'

const styles = {
  fullHeight: {
    height: '100%',
  },
}

const CenteredContainer = ({ classes, className, children, fullHeight }) =>
  <Grid
    container
    alignItems='center'
    justify='center'
    className={classNames(className, {
      [classes.fullHeight]: fullHeight,
    })}>
    {children}
  </Grid>

CenteredContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  fullHeight: PropTypes.bool,
}

export default withStyles(styles)(CenteredContainer)
