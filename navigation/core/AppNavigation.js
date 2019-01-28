import React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import DashboardNavigation from '../DashboardNavigation';

export default createSwitchNavigator({
    Main: DashboardNavigation,
});