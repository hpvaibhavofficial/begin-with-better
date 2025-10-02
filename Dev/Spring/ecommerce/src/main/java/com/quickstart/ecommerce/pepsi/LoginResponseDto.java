package com.quickstart.ecommerce.pepsi;

public class LoginResponseDto {
    private String jwt;
    private Long userId;

    public LoginResponseDto() {}

    public LoginResponseDto(String jwt, Long userId) {
        this.jwt = jwt;
        this.userId = userId;
    }

    public String getJwt() { return jwt; }
    public void setJwt(String jwt) { this.jwt = jwt; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
