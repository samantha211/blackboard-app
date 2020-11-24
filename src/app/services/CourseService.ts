import {Injectable} from '@angular/core';

@Injectable()
export class CourseService{
  findAllCourses = () =>
    fetch( 'http://blackboardbackend2-env.eba-xk5pswce.us-east-2.elasticbeanstalk.com/api/courses')
      .then(response => response.json())
}
