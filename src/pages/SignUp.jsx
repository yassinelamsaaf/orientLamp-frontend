import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";
import "../styles/Auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (!acceptTerms) {
      setError("Vous devez accepter les conditions d'utilisation");
      return;
    }

    try {
      const result = await register(firstName, lastName, email, password, educationLevel);
      if (result && result.success) {
        // Don't auto-login — ask user to verify email first
        navigate('/login');
      } else {
        const msg =
          result?.error ||
          result?.details?.message ||
          result?.details?.error ||
          result?.message ||
          'Registration failed';
        console.log('Registration failed message to display:', result, result?.details);
        setError(msg);
      }
    } catch (err) {
      // Prefer server-provided message when available
      console.error('Registration error response:', err?.response || err);
      const msg = err?.response?.data?.message || err?.message || 'Registration failed';
      console.log('Error message to display:', msg);
      setError(msg);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-split">
        {/* Left Side - Form */}
        <div className="auth-form-side">
          <div className="auth-form-container">
            <div className="auth-header">
              <h1>Créer un compte</h1>
              <p>Rejoignez OrientLamp dès aujourd'hui</p>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jean"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Nom</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Dupont"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="votreemail@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="educationLevel">Niveau d'études</label>
                <select
                  id="educationLevel"
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  required
                  className="form-select"
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="bac">Bac</option>
                  <option value="bac1">Bac+1</option>
                  <option value="bac2">Bac+2</option>
                  <option value="bac2">Classes Préparatoires (Bac+2)</option>
                  <option value="licence">Licence (Bac+3)</option>
                  <option value="bac4">Bac+4</option>
                  <option value="master">Master (Bac+5)</option>
                  <option value="engineering">Ingénierie (Bac+5)</option>
                  <option value="plusDeBac5">Plus que Bac+5</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <span>
                  J'accepte les{" "}
                  <a href="/terms" className="forgot-link">
                    conditions d'utilisation
                  </a>
                </span>
              </label>

              <button type="submit" className="btn-submit">
                S'inscrire
              </button>
            </form>

            <div className="divider">
              <span>OU</span>
            </div>

            <div className="social-login">
              <button className="social-btn google-btn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continuer avec Google</span>
              </button>
            </div>

            <div className="auth-footer">
              Vous avez déjà un compte?{" "}
              <Link to="/login" className="auth-link">
                Se connecter
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="auth-image-side">
          <div className="auth-image-overlay">
            <div className="auth-right-logo">
              <img src="/images/orientLamp-logo.png" alt="OrientLamp Logo" />
            </div>
            <h2>Commencez votre voyage</h2>
            <p>
              Des milliers d'étudiants ont trouvé leur école idéale avec
              OrientLamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
