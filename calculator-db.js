/**
 * UCD COST OF ATTENDANCE & LOAN CALCULATOR - PROTOTYPE DATABASE
 * Base currency for institutional charges is EUR (€).
 * Base currency for US Federal Loans is USD ($).
 * Updated in accordance with the One Big Beautiful Bill Act (OBBBA) statutory rules.
 */

const UCD_FINANCIAL_DATABASE = {
    metadata: {
        lastUpdated: "June 2026",
        academicYear: "2026/2027",
        institutionalExchangeRate: 1.10 // €1.00 EUR = $1.10 USD
    },

    mandatoryFees: {},

    tuitionRatesEUR: {
        undergraduate: {
            "Arts & Humanities": 21600,
            "Business & Law": 27200,
            "Science & Engineering": 27800,
            "Health & Agricultural Sciences": 28500,
            "Medicine & Veterinary Medicine": 56500,
            "BSc Nursing (Aid Prohibited)": 0
        },
        graduate: {
            "Arts & Humanities (Taught MA)": 22400,
            "Business (Smurfit School MSc)": 26900,
            "STEM / Science & Engineering (MSc)": 28900,
            "Medicine & Health Sciences": 29400,
            "MSc Nursing (Aid Prohibited)": 0
        }
    },

    costOfLivingMonthlyEUR: {
        durationMonths: {
            undergraduate: 9,
            graduate: 12
        },
        breakdown: {
            "Rent & On-Campus/Shared Housing": 1100,
            "Food & Groceries": 350,
            "Local Public Transport (Student Leap Card)": 80,
            "Utilities, Heating & Broadband": 100,
            "Miscellaneous Personal & Social Expenses": 170
        },
        annualFixedExpenses: {
            "Mandatory Non-EU Student Health Insurance": 450,
            "Textbooks, Software & Academic Supplies": 800,
            "Transatlantic Flights / Holiday Travel Home": 1200
        }
    },

    // Statutory caps established under OBBBA federal regulations
    federalLoanCapsUSD: {
        parentPlusAnnualMax: 20000,   // Parent PLUS is capped at $20,000 annually per child
        gradUnsubsidizedAnnualMax: 20500 // Grad PLUS is eliminated; Grads max out at $20,500 standard Unsub
    },

    complianceExclusions: {
        ineligibleKeywords: [
            "online", "distance", "nursing", "diploma", "certificate", "part-time"
        ],
        unsupportedPrograms: [
            "BSc Nursing",
            "MSc Nursing",
            "Professional Diploma in Education",
            "Online MSc in Data Analytics"
        ],
        warningMessage: "The US Department of Education prohibits Federal Title IV Aid from being utilized for online/distance learning, certificate programs, or nursing programs at international institutions. Federal loans cannot be certified for this track."
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = UCD_FINANCIAL_DATABASE;
}
