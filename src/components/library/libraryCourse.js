import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';
class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library_course__title">Problem Solving></label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                
                <Action className="library-course__action"/>
                <Arrow className="library-course__arrow"/>
                
                <div>
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis ornare nunc, at rutrum elit. Nulla a facilisis enim. Proin volutpat metus massa, vel ullamcorper risus iaculis nec. Sed sem lectus, vulputate nec tincidunt ut, ultricies quis neque. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;