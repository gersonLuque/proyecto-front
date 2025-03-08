import {Archive} from '@core/dto/archive';

export interface TaskResponseDto {
  taskId: number
  description: string
  title: string
  startDate: string
  endDate: string
  endTime: string
  visible: boolean
  courseName: string
  nameTeacher: string
  hasSolution:boolean
  fileTasks: Archive[]
}


