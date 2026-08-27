import mongoose from 'mongoose';
import Activity from '../models/activity.js';
import Leaderboard from '../models/leaderboard.js';
import Team from '../models/team.js';
import User from '../models/user.js';
import Workout from '../models/workout.js';
import { connectionString } from '../config/database.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Avery Chen', email: 'avery.chen@example.com', avatar: 'AC' },
      { name: 'Jordan Rivera', email: 'jordan.rivera@example.com', avatar: 'JR' },
      { name: 'Morgan Patel', email: 'morgan.patel@example.com', avatar: 'MP' },
    ]);

    const teams = await Team.create([
      { name: 'Summit Striders', color: '#ef8354', members: [users[0]._id, users[1]._id] },
      { name: 'Trail Blazers', color: '#2d7dd2', members: [users[2]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Run', durationMinutes: 32, calories: 340, completedAt: new Date('2026-08-25') },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 48, calories: 510, completedAt: new Date('2026-08-26') },
      { user: users[2]._id, type: 'Strength', durationMinutes: 28, calories: 220, completedAt: new Date('2026-08-24') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 860, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 720, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 640, rank: 3 },
    ]);

    await Workout.create([
      {
        title: 'Core Builder',
        description: 'A focused routine for balance and core strength.',
        difficulty: 'Beginner',
        durationMinutes: 20,
        exercises: ['Plank', 'Dead bug', 'Bird dog'],
      },
      {
        title: 'Full Body Circuit',
        description: 'A steady circuit to build strength and conditioning.',
        difficulty: 'Intermediate',
        durationMinutes: 35,
        exercises: ['Squats', 'Push-ups', 'Mountain climbers'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
