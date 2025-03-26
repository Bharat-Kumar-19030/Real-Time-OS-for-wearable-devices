# Real-Time-OS-for-wearable-devices
This repository contains the the simulation project depicting the working of the real-time operating system.


# RTOS Simulator for Wearable Devices

This project is a web-based **Real-Time Operating System (RTOS) Simulator** for wearable devices. It allows users to select tasks to execute based on the **Rate Monotonic Scheduling (RMS)** algorithm. The platform also provides an **Admin Panel** to modify task deadlines dynamically.

## Features
- User Panel for task selection.
- Admin Panel for modifying task deadlines.
- Dynamic task scheduling using **Rate Monotonic Scheduling (RMS)** algorithm.
- Real-time display of:
  - **Ongoing Processes**
  - **Queued Processes**
  - **Completed Processes**

## Setup Instructions
1. Clone the repository.
   git clone <repository_url>
   cd <repository_folder>
   
2. Open the `index.html` file directly in your browser.

## How to Use the Simulator
### User Panel
1. Select the desired tasks by checking the corresponding checkboxes:
   - **See Time**
   - **Listen to Music**
   - **Monitor Heartbeat**
   - **Attend Phone Call**
   - **Send Message**
2. Click the **"Start Tasks"** button to begin task execution.
3. Tasks will be displayed in the following sections:
   - **Ongoing Processes**
   - **Queued Processes**
   - **Completed Processes**

### Admin Panel
1. Select a task from the dropdown list.
2. Enter the new **deadline** in milliseconds.
3. Click the **"Add/Change Task Deadline"** button to update the task's deadline.

## Task Details (Default Deadlines)
| Task Name             | Default Deadline (ms)     |
|-----------------------|---------------------------|
| **See Time**          | 500 ms                    |
| **Listen to Music**   | 800 ms                    |
| **Monitor Heartbeat** | 400 ms                    |
| **Attend Phone Call** | 700 ms                    |
| **Send Message**      | 600 ms                    |

## Troubleshooting
- If tasks are not displayed correctly:
  - Ensure all file paths are correctly referenced in the HTML.
  - Check the **console log** for JavaScript errors.
- For delayed execution, verify the deadline values entered in the Admin Panel.

## Future Enhancements
- Implement **Earliest Deadline First (EDF)** scheduling for flexibility.
- Provide export functionality for completed process logs.

Happy Coding!

