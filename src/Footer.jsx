import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
    return (
        <div class="card">
            <div class="card-header">
                Have a nice day!
            </div>
            <div class="card-body">
                <h5 class="card-title">We would appreciate your feedback</h5>
                <div class="form-floating">
                    <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <input class="btn btn-primary mt-2" type="submit" value="Submit"/>
            </div>
        </div>
    )
}
