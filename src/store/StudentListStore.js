import { extendObservable, action } from 'mobx';
import { getPlans, removePlan, getStudentList } from 'util/api';

export default class StudentListStore {
  constructor() {
    this.reset(true);
  }

  @action
  reset = (init) => {
    const state = {
      data: [],
      loading: false // 是否显示加载状态
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }

    this.location = {};
    this.match = {};
    this.history = {};
  }

  @action
  onWillMount = async (location, match, history) => {
    this.reset();

    this.setRoute(location, match, history);

    this.loading = true;
    this.getStudentList();
    this.loading = false;
  }

  setRoute = (location, match, history) => {
    this.location = location;
    this.match = match;
    this.history = history;
  }

  @action
  create = () => {
    this.history.push('/project/form/step');
  }

  @action
  async getStudentList() {
    const res = await getStudentList();
    this.data = res.data;
  }
}
