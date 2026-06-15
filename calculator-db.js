/**
 * UCD COST OF ATTENDANCE & LOAN CALCULATOR - STATIC DATABASE
 * Update this file once a year (typically April/May) to maintain accuracy.
 * Base currency for institutional charges is EUR (€).
 * Base currency for US Federal Loans is USD ($).
 */

const UCD_FINANCIAL_DATABASE = {
    metadata: {
        lastUpdated: "June 2026",
        academicYear: "2026/2027",
        // Flat conversion rate used to keep estimates stable for prospective students
        institutionalExchangeRate: 1.16 // €1.00 EUR = $1.16 USD
    },

    // Fixed institutional fees applied to ALL international students
    mandatoryFees: {
        studentCenterLevyEUR: 254
    },

    // Non-EU International Tuition Rates (Estimated Averages per Academic Year)
    tuitionRatesEUR: {
        undergraduate: {
            "Arts & Humanities": 22600,
            "Business": 23170,
            "Science & Engineering": 29500,
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

    // Standardized Cost of Living (COL) Baselines for Dublin
    costOfLivingMonthlyEUR: {
        // Multipliers based on typical visa/academic timeline requirements
        durationMonths: {
            undergraduate: 9, // Autumn & Spring trimesters
            graduate: 12      // Full calendar year for Masters research/dissertations
        },
        // Estimated realistic breakdown of monthly expenses in Dublin
        breakdown: {
            accommodation: 1200, // Average for shared/on-campus accommodation
            foodAndGroceries: 490,
            localTransport: 75,  // Assumes use of Student Leap Card
            utilitiesAndInternet: 135,
            miscellaneousPersonal: 110,
            internetAndmobile: 45,
            clothingAndhygiene: 150,
            booksAndcopying: 120,
            personalAndsocial: 120
        },
        // One-time fixed annual personal expenses
        annualFixedExpenses: {
            mandatoryHealthInsurance: 690, // Required for non-EU Student Visa
            irishResidencePermit: 300,
            flights: 1200     // Average roundtrips home
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

// Exporting the module so it can be used in your application scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UCD_FINANCIAL_DATABASE;
}