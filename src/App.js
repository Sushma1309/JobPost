// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
        <header>JOB POST</header>

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Job Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Job type/designation</label>
                            <input type="text" placeholder="Enter job title" required/>
                        </div>

                        <div class="input-field">
                            <label>Preferred Industry</label>
                            <select required>
                                <option disabled selected>Select one</option>
                                <option>op1</option>
                                <option>op2</option>
                                <option>op3</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Job Location</label>
                            <select required>
                                <option disabled selected>Select one</option>
                                <option>op1</option>
                                <option>op2</option>
                                <option>op3</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Job Type</label>
                            <select required>
                                <option disabled selected>Select one</option>
                                <option>op1</option>
                                <option>op2</option>
                                <option>op3</option>
                            </select>
                            
                        </div>

                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Any</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Company Name</label>
                            <input type="text" placeholder="Enter company name" required/>
                        </div>
                    </div>
                </div>

                    <div class="fields">
                        <div class="input-field">
                            <label for="exp">Experience</label>
                    <input type="number" placeholder="Min" min="0" max="100"></input>&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;          
                    <input type="number" placeholder="Max"  min="0" max="100"></input>
                        </div>
                        <div class="input-field">
                            <label for="sal">Salary</label>
                    <input type="number" placeholder="Min" required ></input>&nbsp;&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;          
                    <input type="number" placeholder="Max" requred></input>
                        </div>
                        <div class="input-field">
                            <label>Status</label>
                            <select required>
                                <option disabled selected>Status</option>
                                <option>op1</option>
                                <option>op2</option>
                                <option>op3</option>
                            </select>
                        </div>


                        <div class="input-field">
                            <label>Start Date</label>
                            <input type="date" placeholder="Enter start date" required/>
                        </div>
                        <div class="input-field">
                            <label>End Date</label>
                            <input type="date" placeholder="Enter end date" required/>
                        </div>

                        

                        <div class="input-field">
                            <label>Working Time</label>
                            <input type="text" placeholder="Enter working time" required/>
                        </div>

                        
                    <div class="input-field">
                    <label for="note">Note</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="100"
                        rows="10"
                        placeholder="Note"
                        required
                    ></textarea>
                    </div>

                        
                    </div><br></br>

                    <button class="nextBtn">
                        <span class="btnText">Submit</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div> 
                </form>
            </div>
            
            );
  }export default App;
