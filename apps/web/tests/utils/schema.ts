import { Link, Project, Tag } from "@prisma/client";
import { expect } from "vitest";

export const expectedLink: Partial<Link> & { tagId: string | null } = {
  id: expect.any(String),
  key: expect.any(String),
  domain: "dub.sh",
  archived: false,
  expiresAt: null,
  password: null,
  proxy: false,
  title: null,
  description: null,
  image: null,
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
  rewrite: false,
  ios: null,
  android: null,
  geo: null,
  publicStats: false,
  clicks: 0,
  lastClicked: null,
  checkDisabled: false,
  tagId: null, // backwards compatibility
  comments: null,
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
  expiredUrl: null,
};

export const expectedTag: Partial<Tag> = {
  id: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};

// TODO:
// Make it dynamic based on the plan
export const expectedWorkspace: Partial<Project> = {
  logo: expect.any(String) || null,
  plan: expect.any(String),
  stripeId: expect.any(String),
  usage: expect.any(Number),
  usageLimit: expect.any(Number),
  linksUsage: expect.any(Number),
  linksLimit: expect.any(Number),
  domainsLimit: expect.any(Number),
  tagsLimit: expect.any(Number),
  usersLimit: expect.any(Number),
  aiLimit: expect.any(Number),
  aiUsage: expect.any(Number),
  monitoringId: null,
  id: expect.any(String),
  billingCycleStart: expect.any(Number),
  inviteCode: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
};
