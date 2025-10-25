// Add Event
function addEvent(e) {
    e.preventDefault();
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;
    const description = document.getElementById('eventDescription').value;

    const eventCard = createEventCard(title, date, location, description);
    
    const grid = document.getElementById('eventsNoticesGrid');
    grid.insertBefore(eventCard, grid.firstChild);
    
    closeModal('addEventModal');
    e.target.reset();
    alert('Event posted successfully!');
}

// Add Complaint
function addComplaint(e) {
    e.preventDefault();
    const category = document.getElementById('complaintCategory').value;
    const title = document.getElementById('complaintTitle').value;
    const description = document.getElementById('complaintDescription').value;
    const ticketId = category.charAt(0).toUpperCase() + '-' + 
                     Math.floor(Math.random() * 9000 + 1000);

    const complaintCard = createComplaintCard(category, title, description, ticketId);
    
    const grid = document.getElementById('complaintsGrid');
    grid.insertBefore(complaintCard, grid.firstChild);
    
    closeModal('addComplaintModal');
    e.target.reset();
    alert('Complaint submitted successfully! Ticket ID: #' + ticketId);
}

// Filter Complaints
function filterComplaints(status) {
    const complaints = document.querySelectorAll('#complaintsGrid .card');
    complaints.forEach(complaint => {
        if (status === 'all') {
            complaint.style.display = 'block';
        } else {
            const complaintStatus = complaint.getAttribute('data-status');
            complaint.style.display = complaintStatus === status ? 'block' : 'none';
        }
    });
}

// Helper functions to create card elements
function createEventCard(title, date, location, description) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <div>
                <span class="badge badge-event">Event</span>
                <h3 class="card-title">${title}</h3>
            </div>
        </div>
        <div class="card-meta">
            <span>📅 ${new Date(date).toLocaleDateString('en-IN', 
                { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span>📍 ${location}</span>
        </div>
        <div class="card-content">${description}</div>
        <button class="btn btn-primary">Register Now</button>
    `;
    return card;
}

function createComplaintCard(category, title, description, ticketId) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-status', 'pending');
    card.innerHTML = `
        <div class="card-header">
            <div>
                <span class="badge badge-pending">Pending</span>
                <h3 class="card-title">${title}</h3>
            </div>
        </div>
        <div class="card-meta">
            <span>🏷️ ${category}</span>
            <span>📅 ${new Date().toLocaleDateString('en-IN', 
                { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span>🎫 #${ticketId}</span>
        </div>
        <div class="card-content">${description}</div>
    `;
    return card;
}

// Add remaining form handlers: addNotice, createClub, addFeedback
