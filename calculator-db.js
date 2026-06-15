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
        institutionalExchangeRate: 1.16 // €1.00 EUR = $1.16 USD
    },

    mandatoryFees: {},

    tuitionRatesEUR: {
        undergraduate: {
            "Classroom - Arts & Humanities, Social Sciences & Law": 22600,
            "Business": 23170,
            "Labratory - Agriculture, Science, & Engineering": 29500,
            "Veterinary Medicine": 38000,
            "Medicine": 63890
        },
        graduate: {
            "Classroom - Arts & Humanities, Social Sciences & Law": 22600,
            "Business (Smurfit School)": 23870,
            "Labratory - Agriculture, Science & Engineering": 29500,
            "Veterinary Medicine (Graduate Entry)": 44880,
            "Medicine (Graduate Entry)": 66360
        }
    },

    costOfLivingMonthlyEUR: {
        durationMonths: {
            undergraduate: 9,
            graduate: 12
        },
        breakdown: {
            "Rent & On-Campus/Shared Housing": 1200,
            "Food & Groceries": 490,
            "Local Public Transport (Student Leap Card)": 75,
            "Utilities, Heating & Broadband": 135,
            "Books & Copying": 120,
            "Clothing & Hygiene": 150,
            "Internet & Mobile": 45,
            "Personal & Social": 120,
            "Miscellaneous": 110
        },
        annualFixedExpenses: {
            "Mandatory Non-EU Student Health Insurance": 690,
            "Irish Residence Permit": 300,
            "Roundtrip Flights": 1200
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
