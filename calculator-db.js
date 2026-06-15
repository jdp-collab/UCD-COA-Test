/**
 * UCD COST OF ATTENDANCE & LOAN CALCULATOR - PROTOTYPE DATABASE
 * Base currency for institutional charges is EUR (€).
 * Base currency for US Federal Loans is USD ($).
 * Update this configuration file annually (typically April/May).
 */

const UCD_FINANCIAL_DATABASE = {
    metadata: {
        lastUpdated: "June 2026",
        academicYear: "2026/2027",
        // Flat conversion baseline used to keep estimates stable for prospective planning
        institutionalExchangeRate: 1.16 // €1.00 EUR = $1.16 USD
    },

    // Fixed institutional fees (References to Student Centre Levy completely removed)
    mandatoryFees: {},

    // Non-EU International Tuition Rates (Estimated Averages per Academic Year)
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

    // Standardized Cost of Living (COL) Baselines for the Dublin Housing Market
    costOfLivingMonthlyEUR: {
        // Multipliers based on typical student visa / trimester requirements
        durationMonths: {
            undergraduate: 9, // Autumn & Spring Trimesters
            graduate: 12      // Full calendar year for Masters research/dissertations
        },
        // Individual monthly expense items displayed line-by-line in the prototype UI
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
        // Individual one-time annual personal expense items displayed line-by-line in the prototype UI
        annualFixedExpenses: {
            "Mandatory Non-EU Student Health Insurance": 690,
            "Irish Residence Permit": 300,
            "Roundtrip Flights": 1200
        }
    },

    // Program Compliance and Ineligibility Rules for US Title IV Federal Aid
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
