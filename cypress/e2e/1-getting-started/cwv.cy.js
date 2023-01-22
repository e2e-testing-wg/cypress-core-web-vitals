/// <reference types="cypress" />

/*
const defultCWV = {
  "lcp": 2500,
  "fid": 100,
  "cls": 0.1,
  "fcp": 1800,
  "ttfb": 600
}
*/

const customThresholds = {
  cls: 0.01,
  fcp: 600,
  fid: 100,
  lcp: 3000,
  ttfb: 10,
};

describe("Web Performance Testing", () => {
  it("should pass the audits with default config", () => {
    cy.vitals({ url: "https://www.bubuku.com/" });
  });

  it("should pass the audits with custom config", () => {
    cy.vitals({
      url: "https://www.renfe.com/es/es",
      thresholds: customThresholds,
      // onReport(report) {
      //   expect(report.thresholds).to.equal(customThresholds);
      //   expect(report.results).to.have.property("lcp");
      //   expect(report.results).to.have.property("fid");
      //   expect(report.results).to.have.property("cls");
      //   expect(report.results).to.have.property("fcp");
      //   expect(report.results).to.have.property("ttfb");

      //   cy.log("------ onReport values ------");
      //   cy.log(JSON.stringify(report, undefined, 2));
      //   cy.log("-----------------------------");
      // },
    });
  });
});
