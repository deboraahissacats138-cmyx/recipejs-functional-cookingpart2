body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f6f8;
}

header {
  background-color: #ff6b6b;
  color: white;
  padding: 20px;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  flex-wrap: wrap;
}

.controls h3 {
  margin-bottom: 10px;
}

button {
  padding: 8px 12px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e0e0e0;
  transition: 0.3s;
}

button:hover {
  background-color: #ff6b6b;
  color: white;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

.recipe-card {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
}

.easy { background-color: #28a745; }
.medium { background-color: #ffc107; }
.hard { background-color: #dc3545; }

.time {
  margin-top: 8px;
  font-size: 14px;
  color: #555;
}
