import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path:'/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path:'/jobs/add',
            name: 'addjob',
            component: AddJobView
        },
        {
            path:'/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
});

export default router;