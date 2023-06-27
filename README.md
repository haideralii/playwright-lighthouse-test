### Lighthouse Performance Test
This repository contains a set of tests for performing performance audits using Lighthouse and Playwright. The tests are written using the Playwright Test framework.

Installation
Clone the repository:

git clone https://github.com/your/repository.git

Install the dependencies:

        npm install
        npx playwright install

To run the performance tests, execute the following command:

        npm test

Test Descriptions
Home Page Performance Audit
This test audits the performance of the home page. It navigates to the root URL ("/") and runs the performance audit.

##### Desktop - About Page Performance Audit
This test audits the performance of the about page in a desktop view. It navigates to the "/about" page and runs the performance audit.

##### Mobile - About Page Performance Audit
This test audits the performance of the about page in a mobile view. It navigates to the "/about" page and runs the performance audit with mobile-specific configurations.

##### Test Execution
The performance audits are executed using the playAudit function from the playwright-lighthouse library. The audits are performed with different configurations for desktop and mobile views.

The runPerformanceAuditInDesktop function is used for desktop audits. It takes the following parameters:

page: The Playwright page object.
setView: The configuration for desktop view.
url: The URL to be audited.
reportName: The name of the generated report.
The runPerformanceAuditInMobile function is used for mobile audits. It takes the following parameters:

page: The Playwright page object.
url: The URL to be audited.
reportName: The name of the generated report.
The audits generate performance reports in HTML format and save them in the performance-reports directory. The reports include information about the performance scores and other metrics.

##### Thresholds
The performance audits have a threshold set for the performance score. If the performance score is below 80, the audit will fail.

##### Reports
The performance reports are generated in HTML format and are saved in the performance-reports directory. The reports are named based on the provided reportName parameter appended with the current timestamp.
