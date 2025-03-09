export default function PlacementPolicy() {
    return (
      <div className="w-full bg-gray-100 py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#FF4B00] text-center">Placement Policy</h1>
          <p className="text-gray-700 text-center mt-4">
            At Empire Ad School, we are committed to empowering every learner with the right tools, knowledge, and industry connections to kickstart their career. 
            To ensure a smooth and transparent process, we have outlined a clear Placement Policy that every student must follow.
          </p>
  
          {/* Important Notes */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#0A0F23]">Important Notes</h2>
            <div className="mt-4 space-y-4">
              <p>🔹 <strong>No Job Guarantee:</strong> While our Placement Team will work hard to connect students with opportunities, we do not guarantee placements. Success depends on your skills, interview performance, and portfolio strength.</p>
              <p>🔹 <strong>Individual Effort Matters:</strong> Our team will open doors, but walking through them is your responsibility.</p>
              <p>🔹 <strong>No Minimum Salary Guarantee:</strong> We strive to help you get the best offer, but we do not promise specific salary figures.</p>
              <p>🔹 <strong>No Location Preference Guarantee:</strong> Opportunities may arise from any city. Keeping an open mind will maximize your chances.</p>
              <p>🔹 <strong>Employer Verification:</strong> We screen employers, but students must also conduct their own research before accepting offers.</p>
            </div>
          </div>
  
          {/* Eligibility Criteria */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#0A0F23]">Eligibility Criteria</h2>
            <div className="mt-4 space-y-4">
              <p>✅ <strong>Course Completion:</strong> You must fully complete your enrolled course, including attendance and assignments.</p>
              <p>✅ <strong>No Disciplinary Issues:</strong> Any disciplinary action will disqualify you from placements.</p>
              <p>✅ <strong>Pass Final Academic Assessment:</strong> Required grades and academic integrity must be maintained.</p>
              <p>✅ <strong>Pass Final Placement Assessment:</strong> Includes mock interviews, resume reviews, and portfolio checks.</p>
              <p>❗ Missing any scheduled mock interview or resume review without prior notice will result in suspension from five placement drives.</p>
            </div>
          </div>
  
          {/* Special Guidelines */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-[#0A0F23]">Special Guidelines</h2>
            <div className="mt-4 space-y-4">
              <p>📌 <strong>Early Access for High Performers:</strong> Top students may get early placement access.</p>
              <p>📌 <strong>Placement Window:</strong> You can apply for roles up to 6 months post-eligibility.</p>
              <p>📌 <strong>First Offer Rule:</strong> Once you accept a job, you are removed from further placement drives.</p>
              <p>📌 <strong>Active Participation:</strong> You must apply to at least 75% of job openings.</p>
              <p>📌 <strong>In-Person Interviews:</strong> If required, travel expenses must be covered by the student.</p>
              <p>📌 <strong>Placement Track Record:</strong> Past students have received around 30 job opportunities per batch.</p>
              <p>📌 <strong>Off-Campus Placements:</strong> If you secure a job outside our process, inform us within 48 hours.</p>
            </div>
          </div>
  
          {/* Grounds for Placement Ban */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-red-600">Grounds for Placement Ban</h2>
            <div className="mt-4 space-y-4">
              <p>🚫 Misbehaving with recruiters, faculty, or placement staff</p>
              <p>🚫 Missing registered interviews without prior notice</p>
              <p>🚫 Accepting an offer and later backing out</p>
              <p>🚫 Presenting false information in your resume</p>
              <p>🚫 Engaging in unprofessional conduct during hiring</p>
              <p>🚫 Contacting recruiters directly (bypassing our placement team)</p>
              <p>🚫 Recording or sharing interviews or offer letters without permission</p>
              <p>🚫 Misrepresenting course details on LinkedIn or other platforms</p>
            </div>
          </div>
  
          {/* Contact for Support */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#0A0F23]">Questions & Support</h2>
            <p className="text-gray-700 mt-2">
              For any placement-related queries, reach out to our team at:
            </p>
            <p className="mt-2">
              📧 <a href="mailto:placements@empireadschool.com" className="text-blue-600 hover:underline">placements@empireadschool.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  