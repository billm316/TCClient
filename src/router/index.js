import Vue from 'vue'
import Router from 'vue-router'
import PatientList from '@/components/PatientList'
import PatientDetail from '@/components/PatientDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      component: PatientList,
    },
    {
      name: 'patientList',
      path: '/PatientList',
      component: PatientList,
    },
    {
      name: 'patientDetail',
      path: '/PatientDetail/:patientKey',
      component: PatientDetail,
      props: true
    }
  ]
})
