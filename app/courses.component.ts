import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    /*template: `
    <h2>Courses</h2>
    {{title}}
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#course of courses">
        {{course}}
        </li>
    </ul>
    `,*/
    template: `
    A Pri é demais de linda adoro ela <3
    `,
    
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of courses page";
    courses;
    
    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}