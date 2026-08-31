/**
 * Re-exports portfolio data for backward compatibility.
 * Prefer importing from `./portfolioData` in new code.
 */
export {
  getContent,
  personal,
  portfolioContent,
  type ExtraItem,
  type FooterLink,
  type Lang,
  type NavItem,
  type PortfolioContent,
  type Project,
  type SkillCategory,
  type TimelineEntry,
} from './portfolioData';

/** @deprecated Use `portfolioContent` from `./portfolioData` */
export { portfolioContent as content } from './portfolioData';
