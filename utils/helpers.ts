import { playAudit } from "playwright-lighthouse";

export async function runPerformanceAuditInDesktop(page, setView, url: string, reportName: string){
    await page.goto(url);
  
    await playAudit({
      page: page,
      config: setView,
      port: 9222,
      thresholds: {
        performance: 80,
      },
      ignoreError: true,
      reports: {
        formats: {
          json: false,
          html: true,
          csv: false,
        },
        name: `${reportName}-${new Date().getMilliseconds()}`,
        directory: `performance-reports`, 
      },
    });
  }

  
export async function runPerformanceAuditInMobile(page, url: string, reportName: string){
    await page.goto(url);
  
    const mobileConfig = {
      extends: "lighthouse:default",
      settings: {
        onlyCategories: ["performance"],
        emulatedFormFactor: "mobile",
        throttling: {
          rttMs: 40,
          throughputKbps: 1024,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
          cpuSlowdownMultiplier: 1,
        },
      },
    };
    
    await playAudit({
      page: page,
      config: mobileConfig,
      port: 9222,
      thresholds: {
        performance: 80,
      },
      ignoreError: true,
      reports: {
        formats: {
          json: false,
          html: true,
          csv: false,
        },
        name: `${reportName}-${new Date().getMilliseconds()}`,
        directory: `performance-reports`, 
      },
    });
  }