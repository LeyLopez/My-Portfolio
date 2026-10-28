import { describe, expect, it } from 'vitest';
import { education, projects, skills } from '@/data';
import type { LocalizedText } from '@/types/portfolio';

const validTracks = new Set(['development', 'automation', 'data']);

function expectLocalizedText(value: LocalizedText) {
  expect(value.es.trim()).not.toBe('');
  expect(value.en.trim()).not.toBe('');
}

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value !== null && typeof value === 'object') {
    return Object.values(value).flatMap(collectStrings);
  }
  return [];
}

describe('portfolio data integrity', () => {
  it('uses unique project slugs and valid tracks', () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
    projects.forEach((project) => {
      expect(project.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(project.tracks.length).toBeGreaterThan(0);
      project.tracks.forEach((track) => expect(validTracks.has(track)).toBe(true));
    });
  });

  it('provides Spanish and English text for every localized field', () => {
    projects.forEach((project) => {
      expectLocalizedText(project.title);
      expectLocalizedText(project.summary);
      project.highlights.forEach(expectLocalizedText);
    });
    skills.forEach((skill) => expectLocalizedText(skill.category));
    education.forEach((item) => expectLocalizedText(item.program));
  });

  it('does not expose placeholders, invalid links, or phone numbers', () => {
    const strings = collectStrings({ projects, skills, education });
    strings.forEach((value) => {
      expect(value).not.toMatch(/\[[^\]]+\]/);
      expect(value).not.toMatch(/(?:\+57\s*)?\d{10}/);
    });
    projects.forEach((project) => {
      Object.values(project.links).forEach((link) => {
        expect(link).toMatch(/^https:\/\//);
        expect(link).not.toBe('#');
      });
    });
  });

  it('marks the specialization as in progress', () => {
    expect(education.find((item) => item.id === 'software-development-specialization')?.inProgress).toBe(true);
  });
});
