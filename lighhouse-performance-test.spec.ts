import { playAudit } from "playwright-lighthouse";
import { test } from '@playwright/test';
import desktopConfig from 'lighthouse/lighthouse-core/config/desktop-config.js';
import {runPerformanceAuditInMobile, runPerformanceAuditInDesktop} from "../utils/helpers"

test.describe.only('Lighthouse Performance Test', () => {
  test('Home Page Performance Audit', async ({page}) => {
    await page.goto('/')
    const setView = desktopConfig;
    await runPerformanceAuditInDesktop(page, setView, "https://www.webpagetest.org/", "home-page-performance");
  })
  
  test('Desktop - About Page Performance Audit', async ({page}) => {
    const setView = desktopConfig;
    await page.goto('/about')
    await runPerformanceAuditInDesktop(page, setView,"https://www.webpagetest.org/about", "about-page-performance");
  })

  test('Mobile - About Page Performance Audit', async ({page}) => {
    const setView = "lighthouse:default";
    await page.goto('/about')
    await runPerformanceAuditInMobile(page, "https://www.webpagetest.org/about", "about-page-performance");
  })
})
