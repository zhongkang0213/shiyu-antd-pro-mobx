import BasicFormStore from './BasicFormStore';
import StepFormStore from './StepFormStore';
import SearchListStore from './SearchListStore';
import LoginStore from './LoginStore';
import HomeStore from './HomeStore';
import ReportStore from './ReportStore';

import StudentListStore from './StudentListStore';
import WeeklyRecipeEditStore from './WeeklyRecipeEditStore';
import MenuListEditStore from './MenuListEditStore';

export default {
  basicFormStore: new BasicFormStore(),
  stepFormStore: new StepFormStore(),
  searchListStore: new SearchListStore(),
  loginStore: new LoginStore(),
  homeStore: new HomeStore(),
  reportStore: new ReportStore(),
  studentStore: new StudentListStore(),
  WeeklyRecipeEditStore: new WeeklyRecipeEditStore(),
  menuListEditStore: new MenuListEditStore()
};
