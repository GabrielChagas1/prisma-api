import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
describe('PrismaService', () => {
  let service: PrismaService;
  beforeEach(async () => {
