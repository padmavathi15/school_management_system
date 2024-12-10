import React from "react";

const TeacherPortal = () => {
  return (
    <div>
      {/* Main container for layout */}
      <div className="container-fluid">
        <div className="row">
          {/* Main Content Area (this will be on the right side of the sidebar) */}
          <div className="col-md-9 col-lg-10 main-content p-4">
            <h3>Teacher Portal</h3>
            <p>Welcome to your dashboard. Use the sidebar to navigate through the teacher portal features.</p>
          </div>

          {/* Sidebar (this will be on the left side) */}
          <div className="col-md-3 col-lg-2 bg-dark text-white sidebar p-3">
            <h2>Teacher Dashboard</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Classroom Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Assignment Tracker
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Student Performance Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Communication Panel
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;
