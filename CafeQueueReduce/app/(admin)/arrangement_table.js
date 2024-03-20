import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet,StatusBar } from 'react-native';

const WeeklyScheduleScreen = () => {
  const [scheduleData, setScheduleData] = useState([
    { day: 'Sunday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Monday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Tuesday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Wednesday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Thursday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Friday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
    { day: 'Saturday', employees: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] },
  ]);

  const morningHours = ['8-9', '9-10', '10-11', '11-12', '12-13'];
  const afternoonHours = ['13-14', '14-15', '15-16', '16-17', '17-18'];
  const handleEmployeeChange = (dayIndex, employeeIndex, text) => {
    const updatedScheduleData = [...scheduleData];
    updatedScheduleData[dayIndex].employees[employeeIndex] = text;
    setScheduleData(updatedScheduleData);
  };

  
   
}