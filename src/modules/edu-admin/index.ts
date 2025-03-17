// src/modules/edu-admin/index.ts

import { getSchedule } from './api';
import Schedule from './components/Schedule';
import Grades from './components/Grades';
import GpaCalculator from './components/GpaCalculator';
import Credits from './components/Credits';
import ExamInfo from './components/ExamInfo';

export const EduAdminModule = {
    getSchedule,
    Schedule,
    Grades,
    GpaCalculator,
    Credits,
    ExamInfo,
};