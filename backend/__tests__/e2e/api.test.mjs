import { connectDb, disconnectDb } from '../../config/db.js';
import request from 'supertest';
import { app } from '../../server.js';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
  await connectDb();
});

afterAll(async () => {
  await disconnectDb();
});

describe('/api/products', () => {
  it('should return 200 OK and array of products in "data" field', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('should return 200 OK and found product', async () => {
    const res = await request(app).get(
      '/api/products/688947e9ae6e45b7abca1a6b'
    );
    expect(res.status).toBe(200);
  });
});
